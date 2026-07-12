import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facehood — The $HOOD social network",
  description:
    "Facehood is the social network for the $HOOD memecoin on Robinhood Chain. Put on the hood and join.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-fh-bg text-fh-text antialiased">
        {children}
      </body>
    </html>
  );
}
