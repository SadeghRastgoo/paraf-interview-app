"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import { LayoutHeader } from "./components/LayoutHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);
  const isLoading = useAuthStore((state) => state.isLoading);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!isLoading && !accessToken) {
      router.replace("/login");
    }
  }, [mounted, isLoading, accessToken, router]);

  if (!mounted || (isLoading && !accessToken)) {
    return null;
  }

  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
}
