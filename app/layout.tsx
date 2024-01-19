import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import { cookies } from 'next/headers';

import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/context/ThemeProvider';

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
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  return (
    <html lang='en' className={theme?.value}>
      <body
        className={`${poppins.variable} min-h-screen bg-white-800 px-4 font-poppins dark:bg-black-300 sm:px-12 md:px-24`}
      >
        <ThemeProvider defaultTheme={theme?.value || ''}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
