import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Watchlist - Hotstar 123',
}

export default function WatchlistLayout({
  children,
}: PropsWithChildren) {
  return (
    <section>
      {children}
    </section>
  )
}