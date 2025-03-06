export default function usePageTitle() {
  const { t } = useI18n();
  const route = useRoute();

  useHead({
    titleTemplate: (title) => {
      const { titleKey } = route.meta;
      if (titleKey) {
        const fullTitleKey = `screen.${titleKey}`;
        return `${t(fullTitleKey)} | Badminton Hub`;
      }
      if (title) {
        return `${t(title)} | Badminton Hub`;
      }
      return 'Badminton Hub';
    },
  });
}
