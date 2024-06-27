import "@/styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

import { DM_Sans } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata = {
  title: "CanNZ Tours",
  description: "Your gateway to the South Island of New Zealand",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif4.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
