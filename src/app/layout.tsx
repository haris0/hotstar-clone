import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import WatchlistContextProvider from "@/context/WatchlistContext";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotstar 123",
  description: "Discover your amazing movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader color="#ffffff"/>
      <WatchlistContextProvider>
        <Navbar />
        {children}
      </WatchlistContextProvider>
      </body>
    </html>
  );
}
