import DemoAttribution from "./DemoAttribution";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riversidecleaning.adamremix.com"),
  title: "Riverside Window Cleaning | Upper Manhattan",
  description: "Professional residential, storefront and office window cleaning throughout Upper Manhattan.",
  icons: {
    icon: "/AR_Logo.png?v=20261006",
    shortcut: "/AR_Logo.png?v=20261006",
    apple: "/AR_Logo.png?v=20261006",
  },
  openGraph: {
    title: "Riverside Window Cleaning",
    description: "Clear glass. Better light. Professional window cleaning throughout Upper Manhattan.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Riverside Window Cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverside Window Cleaning",
    description: "Clear glass. Better light. Professional window cleaning throughout Upper Manhattan.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><DemoAttribution />{children}</body>
    </html>
  );
}

