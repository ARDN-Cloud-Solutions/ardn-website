-- Calculator entries posted to /api/proposal with reason "calculator" (the
-- Invited proposal page on claude.ai and any later client page). One row per
-- post, history kept. Written only through proposal_calculator_submit(); the
-- tables are closed to the publishable key.

create table public.proposal_calculator_submissions (
  id bigint generated always as identity primary key,
  client text not null,
  person text,
  page text,
  scenario text,
  discount numeric(8,2) not null,
  support_per_dollar numeric(8,2) not null,
  clubs numeric(10,2) not null,
  fee_per_club_month bigint,
  taken_out_year bigint not null,
  kept_year bigint not null,
  today_per_club_year bigint not null,
  after_per_club_year bigint not null,
  net_year bigint not null,
  systems_total integer not null,
  systems_retired integer not null,
  user_agent text,
  created_at timestamptz not null default now()
);
comment on table public.proposal_calculator_submissions is 'One row per calculator state posted from a client proposal page (reason=calculator on /api/proposal). History is kept; the latest row per person is their current view.';
create index proposal_calculator_submissions_client_person_idx on public.proposal_calculator_submissions (client, person, created_at desc);

create table public.proposal_calculator_systems (
  id bigint generated always as identity primary key,
  submission_id bigint not null references public.proposal_calculator_submissions(id) on delete cascade,
  position integer not null,
  name text not null,
  "group" text,
  retire boolean not null,
  qty numeric(12,2),
  unit text,
  license_year bigint not null default 0,
  support_year bigint not null default 0
);
comment on table public.proposal_calculator_systems is 'The per-system rows of one calculator submission: keep or retire, how many, license and support a year.';
create index proposal_calculator_systems_submission_idx on public.proposal_calculator_systems (submission_id);

alter table public.proposal_calculator_submissions enable row level security;
alter table public.proposal_calculator_systems enable row level security;
revoke all on public.proposal_calculator_submissions from anon, authenticated;
revoke all on public.proposal_calculator_systems from anon, authenticated;

create or replace function public.proposal_calculator_submit(p jsonb)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  sid bigint;
  s jsonb;
  i integer := 0;
begin
  if p is null or jsonb_typeof(p) <> 'object' or jsonb_typeof(p->'systems') <> 'array' then
    raise exception 'submission must be an object with a systems array';
  end if;
  if jsonb_array_length(p->'systems') > 80 then raise exception 'too many systems'; end if;

  insert into public.proposal_calculator_submissions (
    client, person, page, scenario, discount, support_per_dollar, clubs, fee_per_club_month,
    taken_out_year, kept_year, today_per_club_year, after_per_club_year, net_year,
    systems_total, systems_retired, user_agent
  ) values (
    left(coalesce(p->>'client', ''), 120),
    left(p->>'person', 200),
    left(p->>'page', 200),
    left(p->>'scenario', 40),
    (p->>'discount')::numeric,
    (p->>'supportPerDollar')::numeric,
    (p->>'clubs')::numeric,
    (p->>'fee')::bigint,
    (p->'totals'->>'takenOut')::bigint,
    (p->'totals'->>'kept')::bigint,
    (p->'totals'->>'todayPerClub')::bigint,
    (p->'totals'->>'afterPerClub')::bigint,
    (p->'totals'->>'net')::bigint,
    jsonb_array_length(p->'systems'),
    (select count(*) from jsonb_array_elements(p->'systems') e where coalesce((e->>'retire')::boolean, true)),
    left(p->>'userAgent', 300)
  ) returning id into sid;

  for s in select * from jsonb_array_elements(p->'systems') loop
    i := i + 1;
    insert into public.proposal_calculator_systems (submission_id, position, name, "group", retire, qty, unit, license_year, support_year)
    values (
      sid, i,
      left(coalesce(s->>'name', ''), 120),
      left(s->>'group', 80),
      coalesce((s->>'retire')::boolean, true),
      (s->>'qty')::numeric,
      left(s->>'unit', 40),
      coalesce((s->>'license')::bigint, 0),
      coalesce((s->>'support')::bigint, 0)
    );
  end loop;
  return sid;
end;
$$;

revoke all on function public.proposal_calculator_submit(jsonb) from public;
grant execute on function public.proposal_calculator_submit(jsonb) to anon, service_role;
