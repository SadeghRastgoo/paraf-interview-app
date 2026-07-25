"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setTokenGetter } from "@/lib/api/client";
import type { LoginCredentials, UserProfile } from "../types/auth.types";
import * as authService from "../services/auth.service";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  fetchUser: () => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null });

        try {
          const { accessToken, refreshToken } =
            await authService.login(credentials);
          set({ accessToken, refreshToken });

          const user = await authService.getCurrentUser();
          set({ user, isLoading: false });
        } catch {
          set({
            accessToken: null,
            refreshToken: null,
            user: null,
            isLoading: false,
            error: "ورود ناموفق بود. لطفاً اطلاعات را بررسی کنید.",
          });
          throw new Error("Login failed");
        }
      },

      fetchUser: async () => {
        if (!get().accessToken) return;

        set({ isLoading: true, error: null });

        try {
          const user = await authService.getCurrentUser();
          set({ user, isLoading: false });
        } catch {
          set({
            accessToken: null,
            refreshToken: null,
            user: null,
            isLoading: false,
            error: "دریافت اطلاعات کاربر با خطا مواجه شد.",
          });
        }
      },

      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          error: null,
        });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "paraf-auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        user: state.user,
      }),
    },
  ),
);

setTokenGetter(() => useAuthStore.getState().accessToken);
