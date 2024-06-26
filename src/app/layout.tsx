import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/Components/Nav/Header";
import Footer from "@/Components/footer/Footer";

export const metadata: Metadata = {
  title: "Career Sync - Boost your career with us",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >
      <Toaster position="top-right"/>
<Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
