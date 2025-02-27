export enum Language {
  EN = 'en',
  VI = 'vi',
}

export const DEFAULT_LANGUAGE = Language.VI;

export const LANGUAGES = [Language.EN, Language.VI] as const;
