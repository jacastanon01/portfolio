import type { Metadata } from 'next';
import { Poppins, Figtree } from 'next/font/google';
import React from 'react';
import { cookies } from 'next/headers';

import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/context/ThemeProvider';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500', '600', '700', '900'],
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
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
        className={`${poppins.variable} ${figtree.variable} flex-between min-h-screen flex-col bg-white-800  px-6 font-poppins dark:bg-black-300 dark:text-white-800 md:px-12 lg:px-20`}
      >
        <ThemeProvider defaultTheme={theme?.value || ''}>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
