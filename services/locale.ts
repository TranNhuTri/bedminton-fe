'use server';

import { cookies } from 'next/headers';

import { Locale, DEFAULT_LOCALE } from '@/configs';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
