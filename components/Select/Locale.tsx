'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { SelectChangeEvent } from '@mui/material/Select';

import { CommonSelect } from '@/components/Common';
import { Locale } from '@/configs';
import { setUserLocale } from '@/services/locale';
import { enumToOptions } from '@/utils';

export default function SelectLocale() {
  const t = useTranslations('Layout');
  const defaultLocale = useLocale() as Locale;
  const [locale, setLocale] = useState(defaultLocale);
  const localeOptions = enumToOptions(Locale, (key) => t(`locale.${key}`));

  const onChange = (event: SelectChangeEvent) => {
    const value = event.target.value as Locale;
    setUserLocale(value);
    setLocale(value);
  };

  return (
    <CommonSelect value={locale} options={localeOptions} onChange={onChange} />
  );
}
