import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Heart } from 'lucide-react';

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
          <header className="px-4 py-2 flex justify-between items-center">
            <LanguageSwitcher />
            <button className="p-2">
              <Heart className="h-6 w-6" />
            </button>
          </header>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 