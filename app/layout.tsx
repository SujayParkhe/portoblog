import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sujay Parkhe",
  description: "Generated with ❤️ by using NextJs and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-slate-950 text-slate-50 ${inter.className}`}
      >
        <div className="max-w-2xl mx-auto py-10 px-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
