"use client";

import "./globals.css"; // Import global styles
import { JetBrains_Mono } from "next/font/google"; // Import Google Fonts
import Header from "@/components/Header"; // Import Header component
import PageTransition from "@/components/PageTransition"; // Import PageTransition
import StairTransition from "@/components/StairTransition"; // Import StairTransition
import { usePathname } from "next/navigation"; // For dynamic route handling

// Configure JetBrains Mono font
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current route path

  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        {/* Header */}
        <Header />

        {/* Combine Stair and Page Transitions */}
        <StairTransition>
          <PageTransition pathname={pathname}>{children}</PageTransition>
        </StairTransition>
      </body>
    </html>
  );
}
