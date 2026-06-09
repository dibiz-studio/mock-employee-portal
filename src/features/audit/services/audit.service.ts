import { MOCK_AUDIT_LOGS } from "@/shared/lib/mock-data";

export interface AuditLogRow {
  id: string;
  actor_id: string | null;
  actor_name: string | null;
  action: string;
  entity_type: string;
  entity_id: string | null;
  old_values: Record<string, unknown> | null;
  new_values: Record<string, unknown> | null;
  ip_address: string | null;
  created_at: string;
}

export async function getAuditLogs(limit = 100): Promise<AuditLogRow[]> {
  return MOCK_AUDIT_LOGS.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  ).slice(0, limit);
}
