'use server';

import { cookies } from 'next/headers';

import { Language, DEFAULT_LANGUAGE } from '@/configs';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || DEFAULT_LANGUAGE;
}

export async function setUserLocale(locale: Language) {
  (await cookies()).set(COOKIE_NAME, locale);
}
