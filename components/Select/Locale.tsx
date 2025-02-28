'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { CommonSelect } from '@/components/Common';
import { Locale } from '@/configs';
import { setUserLocale } from '@/services/locale';
import { enumToOptions } from '@/utils';

export default function SelectLocale() {
  const t = useTranslations('Layout');
  const defaultLocale = useLocale() as Locale;
  const [locale, setLocale] = useState(defaultLocale);
  const localeOptions = enumToOptions(Locale, (key) => t(`locale.${key}`));

  const onChange = (value: Locale) => {
    setUserLocale(value);
    setLocale(value);
  };

  return (
    <CommonSelect
      initialValue={locale}
      options={localeOptions}
      onChange={onChange}
    />
  );
}
