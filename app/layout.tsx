import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bruno_Ace, Red_Hat_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-brunoAce",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-redHatDisplay",
});

export const metadata: Metadata = {
  title: "Netfly",
  description: "A film catalogue build with TMDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${brunoAce.variable} ${redHatDisplay.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
