import AppNavbar from "@/components/AppNavbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col ">
      <AppNavbar />
      <main className="flex-1 mx-auto container max-w-screen-xl mt-14 px-4 py-8">
        {children}
      </main>
    </div>
  );
}
