// Stub Supabase client for frontend-only Reel (supports profile queries)
export const createClient = () => {
  const mockProfile = {
    id: "1",
    email: "snigdha@dibiz.com",
    full_name: "Snigdha Singh",
    avatar_url: null,
    role: "SUPER_ADMIN",
    phone: null,
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Mock query builder chain for .from().select().eq().single()
  const mockQuery = {
    select: () => mockQuery,
    eq: () => mockQuery,
    single: async () => ({ data: mockProfile, error: null }),
  };

  return {
    auth: {
      getUser: async () => ({ data: { user: mockProfile } }),
    },
    from: () => mockQuery,
  };
};
