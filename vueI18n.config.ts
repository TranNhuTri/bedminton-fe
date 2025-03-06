export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  legacy: false,
  locale: 'ja',
  datetimeFormats: {
    en: {
      dateTime: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      },
    },
    ja: {
      dateTime: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      },
    },
  },
}));
