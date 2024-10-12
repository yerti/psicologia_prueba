import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles';
import NotifiactionTostify from '@/shared/components/NotifiactionTostify/NotifiactionTostify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <NotifiactionTostify />
      </body>
    </html>
  );
}
