import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Cortex",
  description: "Your AI-powered platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${sora.className} bg-yellow-100`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
