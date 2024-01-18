import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';

import './globals.css';
import Navbar from '@/app/components/Navbar';

import { ThemeProvider } from './context/ThemeProvider';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Jacob Castanon | Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <body
          className={`${poppins.variable} min-h-screen bg-white-800 px-2 font-poppins dark:bg-black-300 sm:px-12`}
        >
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
