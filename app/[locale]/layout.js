import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';

// Import messages directly
import en from '../../messages/en.json';
import fr from '../../messages/fr.json';

const messages = {
    en,
    fr,
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function LocaleLayout({ children, params }) {
  const locale = await Promise.resolve(params?.locale);

  if (!locale || !messages[locale]) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 