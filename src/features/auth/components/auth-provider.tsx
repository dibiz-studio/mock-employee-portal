"use client";

import { createContext, useContext, useEffect, useMemo } from "react";

import { useAuthStore } from "@/shared/stores/auth-store";
import { MOCK_SUPER_ADMIN } from "@/shared/lib/mock-data";

interface AuthContextValue {
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setProfile = useAuthStore((state) => state.setProfile);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    // Ensure the mock user is always set
    const existing = useAuthStore.getState().profile;
    if (!existing) {
      setLoading(true);
      setProfile(MOCK_SUPER_ADMIN);
    } else {
      setLoading(false);
    }
  }, [setProfile, setLoading]);

  const value = useMemo(
    () => ({
      signOut: async () => {
        // No-op in mock environment
      },
    }),
    [],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
