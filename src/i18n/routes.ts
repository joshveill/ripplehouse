// Route key map — translates a logical page identifier into its English
// and French URLs. Used by the language switcher, hreflang tags, and any
// component that needs to link to a page in a specific locale.

export type Locale = 'en' | 'fr';
export type RouteKey = 'home' | 'contact' | 'thanks';

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home:    { en: '/',             fr: '/fr/' },
  contact: { en: '/get-in-touch', fr: '/fr/nous-joindre' },
  thanks:  { en: '/thank-you',    fr: '/fr/merci' },
};

export const locales: Locale[] = ['en', 'fr'];

export function localizedPath(locale: Locale, key: RouteKey): string {
  return routes[key][locale];
}
