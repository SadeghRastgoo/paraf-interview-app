"use client";

import { useAuthStore } from "@/features/auth/stores/auth.store";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const fetchUser = useAuthStore((s) => s.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return children;
}
