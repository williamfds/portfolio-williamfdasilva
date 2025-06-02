import pt from '../locales/pt.json';
import en from '../locales/en.json';

export type Locale = 'pt' | 'en';
export type Messages = typeof pt;

export function getMessages(locale: Locale): Messages {
  switch (locale) {
    case 'pt':
      return pt;
    case 'en':
      return en;
    default:
      console.warn(`Locale "${locale}" não reconhecido. Usando "pt" como fallback.`);
      return pt;
  }
}