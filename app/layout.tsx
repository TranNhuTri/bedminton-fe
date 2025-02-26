import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import './globals.css';

import LayoutHeader from '@/components/Layout/Header';

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'vietnamese'],
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
      <body className={nunitoSans.className}>
        <LayoutHeader />
        {children}
      </body>
    </html>
  );
}
