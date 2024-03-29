import './globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const globalFont = Rubik({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal Portfolio of Piotr Lesiak',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={globalFont.className}>{children}</body>
    </html>
  );
}
