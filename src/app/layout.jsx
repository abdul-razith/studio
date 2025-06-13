"use client";

import './globals.css';
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google';
import { Toaster } from "../components/ui/toaster.jsx";
import { CustomCursor } from '../components/common/custom-cursor.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({
  children,
}) {
  useLayoutEffect(() => {
    gsap.defaults({ ease: "power3.out", duration: 0.5 });
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });
  }, []);

  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <div key="content-wrapper" className="relative">
          <CustomCursor key="cursor" />
          <main key="main-content">{children}</main>
          <Toaster key="toaster" />
        </div>
      </body>
    </html>
  );
}
