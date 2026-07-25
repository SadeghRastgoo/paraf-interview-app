"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import { LayoutHeader } from "../../shared/components/layout/LayoutHeader";
import Image from "next/image";

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
      <div className="relative z-10 pb-20">
        <LayoutHeader />
        {children}
      </div>

      <Image
        src="/bg-pattern.png"
        width={1920}
        height={1080}
        alt=""
        className="absolute top-0 object-cover right-0 left-0 w-full"
      />
    </>
  );
}
