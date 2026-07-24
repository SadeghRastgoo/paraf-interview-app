import { Logo } from "@/shared/components/ui/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col overflow-y-hidden">
      <main className="flex-1 flex flex-col items-center justify-center py-12 overflow-x-hidden">
        <div className="mb-8">
          <Logo />
        </div>

        {children}
      </main>
    </div>
  );
}
