-- Storage for the private proposal pages (/proposals/<client>): sign-in codes,
-- viewer sessions, every tracked event (opens, sections, videos, each
-- scenario and number a viewer tries), who may open each proposal, and the
-- proposals themselves as edited in /proposals/admin.
--
-- The website reaches these only through proposals_db(), a security-definer
-- function guarded by a key that lives in proposal_settings and in the
-- site's PROPOSALS_DB_KEY variable. The publishable key alone can read or
-- write nothing here.

create table public.proposal_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

create table public.proposal_codes (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  email text not null,
  code_hash text not null,
  attempts integer not null default 0,
  expires_at timestamptz not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);
create index proposal_codes_lookup_idx on public.proposal_codes (slug, email, created_at desc);

create table public.proposal_sessions (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  email text not null,
  ip text,
  user_agent text,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);
create index proposal_sessions_created_idx on public.proposal_sessions (created_at desc);

create table public.proposal_events (
  id bigint generated always as identity primary key,
  slug text not null,
  email text not null,
  session_id uuid,
  type text not null,
  page text not null default '',
  data jsonb,
  created_at timestamptz not null default now()
);
comment on table public.proposal_events is 'Everything a proposal viewer did: code_sent, open, view, section, video, state (every scenario and number tried), leave.';
create index proposal_events_created_idx on public.proposal_events (created_at desc);
create index proposal_events_slug_email_idx on public.proposal_events (slug, email, created_at desc);

create table public.proposal_access (
  slug text primary key,
  client text not null default '',
  domains text[] not null default '{}',
  emails text[] not null default '{}',
  updated_at timestamptz not null default now(),
  updated_by text not null default ''
);

create table public.proposal_docs (
  slug text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
comment on table public.proposal_docs is 'A proposal as saved from /proposals/admin. A saved copy wins over the seed shipped in the code.';

alter table public.proposal_settings enable row level security;
alter table public.proposal_codes enable row level security;
alter table public.proposal_sessions enable row level security;
alter table public.proposal_events enable row level security;
alter table public.proposal_access enable row level security;
alter table public.proposal_docs enable row level security;
revoke all on public.proposal_settings, public.proposal_codes, public.proposal_sessions, public.proposal_events, public.proposal_access, public.proposal_docs from anon, authenticated;

create or replace function public.proposals_db(p_key text, p_op text, p_args jsonb default '{}'::jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  want text;
  r jsonb;
  a jsonb := coalesce(p_args, '{}'::jsonb);
begin
  select value into want from public.proposal_settings where key = 'db_key';
  if want is null or p_key is null or p_key <> want then
    raise exception 'proposals_db: not authorized';
  end if;

  case p_op
    -- codes
    when 'code_count_recent' then
      select to_jsonb(count(*)) into r from public.proposal_codes
       where slug = a->>'slug' and email = a->>'email' and created_at >= (a->>'since')::timestamptz;
    when 'code_insert' then
      insert into public.proposal_codes (slug, email, code_hash, expires_at)
      values (a->>'slug', a->>'email', a->>'code_hash', (a->>'expires_at')::timestamptz)
      returning to_jsonb(proposal_codes.*) into r;
    when 'code_latest_open' then
      select to_jsonb(c.*) into r from public.proposal_codes c
       where c.slug = a->>'slug' and c.email = a->>'email' and c.used_at is null and c.expires_at > now()
       order by c.created_at desc limit 1;
    when 'code_patch' then
      update public.proposal_codes
         set attempts = coalesce((a->'patch'->>'attempts')::int, attempts),
             used_at = coalesce((a->'patch'->>'used_at')::timestamptz, used_at)
       where id = (a->>'id')::uuid
      returning to_jsonb(proposal_codes.*) into r;
      delete from public.proposal_codes where created_at < now() - interval '2 days';
    -- sessions
    when 'session_insert' then
      insert into public.proposal_sessions (slug, email, ip, user_agent, expires_at)
      values (a->>'slug', a->>'email', a->>'ip', left(a->>'user_agent', 300), (a->>'expires_at')::timestamptz)
      returning to_jsonb(proposal_sessions.*) into r;
    when 'session_find' then
      select to_jsonb(s.*) into r from public.proposal_sessions s
       where s.id = (a->>'id')::uuid and s.revoked_at is null and s.expires_at > now();
    when 'session_patch' then
      update public.proposal_sessions
         set revoked_at = coalesce((a->'patch'->>'revoked_at')::timestamptz, revoked_at)
       where id = (a->>'id')::uuid
      returning to_jsonb(proposal_sessions.*) into r;
    when 'session_list' then
      select coalesce(jsonb_agg(to_jsonb(s.*) order by s.created_at desc), '[]'::jsonb) into r
        from (select * from public.proposal_sessions order by created_at desc limit coalesce((a->>'limit')::int, 500)) s;
    -- events
    when 'event_insert' then
      insert into public.proposal_events (slug, email, session_id, type, page, data)
      values (a->>'slug', a->>'email', nullif(a->>'session_id', '')::uuid, a->>'type', coalesce(a->>'page', ''), a->'data')
      returning to_jsonb(proposal_events.*) into r;
    when 'event_list' then
      select coalesce(jsonb_agg(to_jsonb(e.*) order by e.created_at desc), '[]'::jsonb) into r
        from (select * from public.proposal_events order by created_at desc limit coalesce((a->>'limit')::int, 5000)) e;
    -- access
    when 'access_read' then
      select coalesce(jsonb_object_agg(x.slug, to_jsonb(x.*)), '{}'::jsonb) into r from public.proposal_access x;
    when 'access_write' then
      insert into public.proposal_access (slug, client, domains, emails, updated_at, updated_by)
      values (a->>'slug', coalesce(a->>'client', ''),
              coalesce((select array_agg(x) from jsonb_array_elements_text(a->'domains') x), '{}'),
              coalesce((select array_agg(x) from jsonb_array_elements_text(a->'emails') x), '{}'),
              now(), coalesce(a->>'updated_by', ''))
      on conflict (slug) do update set client = excluded.client, domains = excluded.domains, emails = excluded.emails, updated_at = now(), updated_by = excluded.updated_by
      returning to_jsonb(proposal_access.*) into r;
    when 'access_delete' then
      delete from public.proposal_access where slug = a->>'slug';
      r := 'true'::jsonb;
    -- proposal documents
    when 'proposal_read' then
      select d.data into r from public.proposal_docs d where d.slug = a->>'slug';
    when 'proposal_write' then
      insert into public.proposal_docs (slug, data, updated_at) values (a->>'slug', a->'data', now())
      on conflict (slug) do update set data = excluded.data, updated_at = now();
      r := 'true'::jsonb;
    when 'proposal_delete' then
      delete from public.proposal_docs where slug = a->>'slug';
      r := 'true'::jsonb;
    when 'proposal_list' then
      select coalesce(jsonb_agg(d.slug order by d.slug), '[]'::jsonb) into r from public.proposal_docs d;
    else
      raise exception 'proposals_db: unknown op %', p_op;
  end case;
  return r;
end;
$$;

revoke all on function public.proposals_db(text, text, jsonb) from public;
grant execute on function public.proposals_db(text, text, jsonb) to anon, service_role;
