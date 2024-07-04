import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Search - Hotstar 123',
}

export default function SearchLayout({
  children,
}: PropsWithChildren) {
  return (
    <section>
      {children}
    </section>
  )
}