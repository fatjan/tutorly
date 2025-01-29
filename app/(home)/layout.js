'use client';

import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/components/Headers/SearchHeader';
import BottomNavBar from '@/components/BottomNavBar';
import Filters from '@/components/Filters';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Filters />
        {children}
        <BottomNavBar />
      </body>
    </html>
  );
}
