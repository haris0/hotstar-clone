import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import WatchlistContextProvider from "@/context/WatchlistContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotstar 123",
  description: "Discover your amazing movies an tv show",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WatchlistContextProvider>
        <Navbar />
        {children}
      </WatchlistContextProvider>
      </body>
    </html>
  );
}
