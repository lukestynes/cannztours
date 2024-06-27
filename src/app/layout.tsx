import "@/styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

import { DM_Sans } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";

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
      <Analytics />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
