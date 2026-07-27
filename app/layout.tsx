import type { Metadata } from "next";
import "./globals.css";

import Header from "./header";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Food Search Application",
  description: "Food Search Application by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
