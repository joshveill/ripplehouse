// Helpers for reading locale + strings in Astro components.
//
//   const locale = getLocale(Astro);
//   const t = useTranslations(locale);
//   t('nav.whatWeDo')   →  'What we do'  or  "Ce qu'on fait"
//
// For nested arrays (services, team members, form options) just read the
// structured slice directly off the locale's strings object — see
// `useStrings(locale).whatWeDo.services` for an example.

import { strings } from './strings';
import { locales, routes, type Locale, type RouteKey } from './routes';

export function getLocale(astro: { currentLocale?: string | undefined }): Locale {
  const candidate = astro.currentLocale;
  if (candidate && (locales as readonly string[]).includes(candidate)) {
    return candidate as Locale;
  }
  return 'en';
}

export function useStrings(locale: Locale) {
  return strings[locale];
}

// Dot-path getter, e.g. t('nav.whatWeDo'). Falls back to the path itself
// if the key is missing — easier to spot than a silent empty string.
export function useTranslations(locale: Locale) {
  const dict = strings[locale];
  return function t(path: string): string {
    const value = path.split('.').reduce<unknown>((acc, segment) => {
      if (acc && typeof acc === 'object' && segment in acc) {
        return (acc as Record<string, unknown>)[segment];
      }
      return undefined;
    }, dict);
    return typeof value === 'string' ? value : path;
  };
}

export function pathFor(locale: Locale, key: RouteKey): string {
  return routes[key][locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}

export function absoluteUrl(site: URL | undefined, path: string): string {
  if (!site) return path;
  return new URL(path, site).href;
}
