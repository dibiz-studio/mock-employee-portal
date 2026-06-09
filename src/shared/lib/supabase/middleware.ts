/* eslint-disable @typescript-eslint/no-unused-vars */

// Stub Supabase middleware client for frontend-only Reel

export interface MockResult<T = unknown> {
  data: T | null;
  error: unknown | null;
}

export interface MockQuery {
  // Chainable query methods
  select: (...args: unknown[]) => MockQuery;
  eq: (column: string, value: unknown) => MockQuery;
  // Finalizers
  single: () => Promise<MockResult<unknown>>;
  insert: (...args: unknown[]) => Promise<null>;
  update: (...args: unknown[]) => Promise<null>;
  delete: (...args: unknown[]) => Promise<null>;
}

export interface MockClient {
  from: (table: string) => MockQuery;
}

export const createClient = (): MockClient => {
  const mockQuery: MockQuery = {
    select: (..._args: unknown[]) => mockQuery,
    eq: (_column: string, _value: unknown) => mockQuery,
    single: async () => ({ data: null, error: null } as MockResult),
    insert: async () => null,
    update: async () => null,
    delete: async () => null,
  };

  const client: MockClient = {
    from: (_table: string) => mockQuery,
  };

  return client;
};
