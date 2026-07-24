import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { yekanBakh } from "@/shared/fonts/YekanBakhFont";
import { GlobalProvider } from "@/shared/providers/GlobalProvider";

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
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${yekanBakh.variable} antialiased bg-linear-to-b from-brand-subtle min-h-screen to-informal-subtle overflow-x-hidden`}
      >
        <GlobalProvider>
          <div className="relative z-10 overflow-x-hidden">{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
