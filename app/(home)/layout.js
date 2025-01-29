'use client';

import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import { useEffect } from 'react';
import Header from '@/components/Headers/SearchHeader';
import BottomNavBar from '@/components/BottomNavBar';
import Filters from '@/components/Filters';

export default function RootLayout({ children }) {

  // useEffect(() => {
  //   const fetchTutors = async () => {
  //     try {
  //       const sortParam = selectedSort.value || selectedFilter || 'price:asc';
  //       const response = await fetch(`/api/filter-tutors?sort=${sortParam}`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       if (data.tutors.length) {
  //         saveTutors(JSON.stringify(data.tutors));
  //       }
  //     } catch (error) {
  //       console.error('Error fetching tutors:', error);
  //     }
  //   };
  //   fetchTutors();
  // }, [selectedFilter, selectedSort.value]);

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
