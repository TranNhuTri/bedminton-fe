export enum Locale {
  EN = 'en',
  VI = 'vi',
}

export const DEFAULT_LOCALE = Locale.VI;

export const LOCALES = [Locale.EN, Locale.VI] as const;
