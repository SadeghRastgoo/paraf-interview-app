import { LayoutHeader } from "./components/LayoutHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
}
