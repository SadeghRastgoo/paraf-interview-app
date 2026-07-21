import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { TooltipProvider } from "@/shared/components/tooltip";
import Image from "next/image";
import { DirectionProvider } from "@/shared/components/direction";
import { AuthProvider } from "@/shared/providers/AuthProvider";

export const yekanBakh = localFont({
  src: "./assets/fonts/YekanBakhFaNum-VF.woff2",
  variable: "--font-yekan-bakh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paraf Club",
  description: "Paraf customers club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={cn("font-sans", yekanBakh.variable)}
    >
      <body
        className={`${yekanBakh.variable} antialiased bg-linear-to-b from-brand-subtle to-informal-subtle pb-10 overflow-x-hidden`}
      >
        <AuthProvider>
          <DirectionProvider dir="rtl">
            <TooltipProvider>
              <div className="relative z-10 overflow-x-hidden">{children}</div>

              <Image
                src="/bg-pattern.png"
                width={1920}
                height={1080}
                alt=""
                className="absolute top-0 object-cover right-0 left-0 w-full"
              />
            </TooltipProvider>
          </DirectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
