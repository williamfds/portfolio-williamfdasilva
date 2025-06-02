'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Locale } from '@/lib/getMessages';


const LocaleContext = createContext<Locale>('pt');

export const useLocale = (): Locale => {
  return useContext(LocaleContext);
};

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}
