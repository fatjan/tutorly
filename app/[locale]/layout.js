import { notFound } from 'next/navigation';

import en from '../../messages/en.json';
import fr from '../../messages/fr.json';
import id from '../../messages/id.json';
import de from '../../messages/de.json';

const messages = {
    en,
    fr,
    id,
    de
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'id' }, { locale: 'de' }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  
  if (!locale || !messages[locale]) {
    notFound();
  }

  return (
    <div>
      {children}
    </div>
  );
} 