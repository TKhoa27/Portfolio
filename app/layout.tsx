import type { Metadata } from "next";
import Headers from "./components/Header";
import "./globals.css";
import About from "./page/About";
import Contact from "./page/Contact";
import Project from "./page/Project";
import { Inter } from "next/font/google";
import Experience from "./page/Experience";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}, bg-gray-50 dark:bg-gray-900`}>
        <Provider>
          <div className="container mx-auto shadow-2xl pl-0 pr-0 bg-gray-100 dark:bg-gray-950 ">
            <Headers />
            <main>{children}</main>
            <About />
            <Experience />
            <Project />
            <Contact />
          </div>
        </Provider>
      </body>
    </html>
  )
}
