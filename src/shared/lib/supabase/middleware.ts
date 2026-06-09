// Stub Supabase middleware client for frontend-only Reel
export const createClient = () => {
  const mockTable = () => ({
    select: async () => [] as any[],
    insert: async () => null,
    update: async () => null,
    delete: async () => null,
  });
  return {
    from: mockTable,
  };
};
