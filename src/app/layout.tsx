import "@/styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Can NZ Tours",
  description: "Your gateway to the South Island of New Zealand",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="nord">
      <body className={`${dmSans.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
