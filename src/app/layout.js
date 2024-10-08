import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { DonationProvider } from "./Components/donatecontext";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-neutral-900 antialiased max-w-5xl mx-auto px-4 bg-white`}
      >
        <DonationProvider>
          {" "}
          {/* Wrap children with DonationProvider */}
          <div className="mb-24">
            <Navbar />
          </div>
          {children}
          <Footer />
        </DonationProvider>
      </body>
    </html>
  );
}
