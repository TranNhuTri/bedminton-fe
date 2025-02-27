'use client';

import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Language, LANGUAGES } from '@/configs';
import { setUserLocale } from '@/services/locale';

export default function SelectLanguage() {
  const t = useTranslations('Layout');
  const defaultLocale = useLocale() as Language;
  const [locale, setLocale] = React.useState(defaultLocale);

  const onChangeLocale = (event: SelectChangeEvent) => {
    const value = event.target.value as Language;
    setUserLocale(value);
    setLocale(value);
  };

  return (
    <Select value={locale} onChange={onChangeLocale}>
      {LANGUAGES.map((language) => (
        <MenuItem key={language} value={language}>
          {t(`language.${language}`)}
        </MenuItem>
      ))}
    </Select>
  );
}
