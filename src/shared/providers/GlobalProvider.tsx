"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./AuthProvider";
import { DirectionProvider } from "../components/ui/direction";
import { TooltipProvider } from "../components/ui/tooltip";

const queryClient = new QueryClient();

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DirectionProvider dir="rtl">
          <TooltipProvider>{children}</TooltipProvider>
        </DirectionProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
