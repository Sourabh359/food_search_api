import type { Metadata } from "next";
import "./globals.css";

import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Food Search Application",
  description: "Search delicious recipes using TheMealDB API",

  keywords: [
    "food",
    "recipes",
    "meal",
    "nextjs",
    "themealdb"
  ],

  authors: [
    {
      name: "Sourabh"
    }
  ]
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
        <Navbar />
        <main className="p-3">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
