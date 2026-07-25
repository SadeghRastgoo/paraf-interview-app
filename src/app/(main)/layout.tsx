"use client";

import Image from "next/image";
import { LayoutHeader } from "@/shared/components/layout/LayoutHeader";
import { AuthGuard } from "@/shared/auth/AuthGuard";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <div className="relative z-10 pb-20">
        <LayoutHeader />
        {children}
      </div>

      <Image
        src="/bg-pattern.png"
        width={1920}
        height={1080}
        alt=""
        className="absolute inset-0 w-full object-cover"
      />
    </AuthGuard>
  );
}
