// Stub Supabase admin client — no real network calls
import { createClient } from "./client";

export function hasAdminClient(): boolean {
  return true; // Mock always has admin
}

export function createAdminClient() {
  const base = createClient();
  return {
    ...base,
    auth: {
      ...base.auth,
      admin: {
        createUser: async (_opts: unknown) => ({
          data: { user: { id: `mock-${Date.now()}` } },
          error: null,
        }),
        deleteUser: async (_id: string) => ({ error: null }),
      },
    },
    from: base.from,
  };
}
