// Stub Supabase client — no real network calls
import { MOCK_SUPER_ADMIN } from "@/shared/lib/mock-data";

function makeQueryBuilder(): Record<string, unknown> {
  const builder: Record<string, unknown> = {};
  const chainMethods = [
    "select", "insert", "update", "delete", "upsert",
    "eq", "neq", "in", "not", "is", "gt", "lt", "gte", "lte",
    "order", "limit", "single", "maybeSingle", "filter",
    "match", "contains", "ilike", "like", "range",
  ];

  for (const method of chainMethods) {
    builder[method] = (..._args: unknown[]) => builder;
  }

  // Terminal resolvers
  (builder as { then: unknown }).then = (resolve: (v: { data: null; error: null; count: number }) => void) =>
    resolve({ data: null, error: null, count: 0 });

  return builder;
}

export const createClient = () => {
  return {
    auth: {
      getUser: async () => ({ data: { user: MOCK_SUPER_ADMIN }, error: null }),
      getSession: async () => ({ data: { session: { user: MOCK_SUPER_ADMIN } }, error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
      signInWithPassword: async () => ({ data: {}, error: null }),
      signInWithOAuth: async () => ({ data: {}, error: null }),
      signUp: async () => ({ data: {}, error: null }),
      signOut: async () => ({ error: null }),
      resetPasswordForEmail: async () => ({ error: null }),
    },
    from: (_table: string) => makeQueryBuilder(),
    storage: {
      from: (_bucket: string) => ({
        upload: async () => ({ data: {}, error: null }),
        download: async () => ({ data: null, error: null }),
        remove: async () => ({ data: null, error: null }),
        getPublicUrl: () => ({ data: { publicUrl: "" } }),
      }),
    },
  };
};
