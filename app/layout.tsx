import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/theme';
import '@/app/globals.css';

import { LayoutHeader } from '@/components/Layout';

const nunitoSans = Nunito_Sans({
  weight: ['300', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'Badminton Hub',
  description: 'We will update it later. Just keep going... lol',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={nunitoSans.variable}>
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <LayoutHeader />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
