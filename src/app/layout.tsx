import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/header/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'G.L.Prosser',
  description: 'G.L.Prosser Building Contractors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
