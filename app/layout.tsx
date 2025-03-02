import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/theme';
import '@/app/globals.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

const nunitoSans = Nunito_Sans({
  weight: ['300', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'Badminton Hub',
  description: 'We will update it later. Just keep going... lol',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={nunitoSans.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
