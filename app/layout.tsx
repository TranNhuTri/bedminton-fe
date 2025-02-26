import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/src/theme';

import './globals.css';

import LayoutHeader from '@/components/Layout/Header';

const nunitoSans = Nunito_Sans({
  weight: ['300', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'Badminton Hub',
  description: 'We will update it later. Just keep going... lol',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunitoSans.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LayoutHeader />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
