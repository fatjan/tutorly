import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import BookTutorButton from '@/components/AboutTutor/BookTutorButton';
import ReportIssue from '@/components/AboutTutor/ReportIssue';
export const metadata = {
  title: "Tutor Page",
  description: "Details of the tutor",
};

export default async function RootLayout({ children }) {
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
        {children}
        <ReportIssue />
        <BookTutorButton />
      </body>
    </html>
  );
}
