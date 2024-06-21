import type { Metadata } from "next";
import Headers from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-slate-950`}>
        {/* Header */}
        <div className="container p-6 mx-auto">
        <Headers/>
        </div>

        {/* Content */}
        <main>{children}</main>
        {/* Footer */}
        
      </body>
    </html>
  );
}
