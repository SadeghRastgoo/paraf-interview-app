import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import Image from "next/image";
import { DirectionProvider } from "@/shared/components/ui/direction";
import { AuthProvider } from "@/shared/providers/AuthProvider";
import "./globals.css";
import { yekanBakh } from "@/shared/fonts/YekanBakhFont";

export const metadata: Metadata = {
  title: "Paraf Club | باشگاه مشتریان پاراف",
  description:
    "لورم ایپسوم ساز فارسی تنها ابزاری است که به طور همزمان از فارسی، عربی، انگلیسی و ترکی پشتیبانی می کند، خروجی آماده Tailwind و Bootstrap تولید می کند",
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
        className={`${yekanBakh.variable} antialiased bg-linear-to-b from-brand-subtle min-h-screen to-informal-subtle pb-10 overflow-x-hidden`}
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
