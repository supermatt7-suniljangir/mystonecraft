/* eslint-disable react/prop-types */
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/others/Footer";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  // Optional: specify weights you need
  weight: ["400", "500", "600", "700", "800", "900"],
  // Optional: if you want to use it as a variable
  variable: "--font-inter",
});

export const metadata = {
  title: "Global Stone Art",
  description: "Natural Stone Suppliers in Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // Method 1: Apply directly to body
        className={`${inter.className} antialiased relative`}
        // OR Method 2: Use as a CSS variable
        // className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
