/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
// Supabase admin stub – removed for reel
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
