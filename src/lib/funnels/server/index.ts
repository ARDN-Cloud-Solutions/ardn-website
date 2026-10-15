// funnel id → its server-side lead handling (answers, routing, emails).

import type { FunnelId } from "../types";
import { AI_SERVER } from "./ai";
import { CS_SERVER } from "./clubSteward";
import { CRM_SERVER } from "./ardnCrm";
import type { ServerFunnel } from "./shared";

export const SERVER_FUNNELS: Record<FunnelId, ServerFunnel> = {
  "ardn-ai-consulting": AI_SERVER,
  "club-steward": CS_SERVER,
  "ardn-crm": CRM_SERVER,
};
