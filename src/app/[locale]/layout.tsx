import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/contexts/LocaleContext';
import Header from '@/components/Header';
import { Locale } from '@/lib/getMessages';

const locales = ['pt', 'en'] as const;
type LocaleLiteral = typeof locales[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale as LocaleLiteral)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as Locale}>
      <Header />
      {children}
    </LocaleProvider>
  );
}