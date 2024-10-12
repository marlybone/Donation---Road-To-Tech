import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { DonationProvider } from "./Components/donatecontext";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-neutral-900 antialiased max-w-5xl mx-auto px-4 bg-white justifty-center text-center`}
      >
        {/* Wrap children with DonationProvider */}
        <div className="mb-24 text-black dark:text-white">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
