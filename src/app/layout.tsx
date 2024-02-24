import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Header from '../components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'G L Prosser',
  description: 'G L Prosser Building Contractors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`h-screen flex flex-col justify-between ${rubik.className} bg-stone-100 text-stone-900`}
      >
        <Header />
        <div className="mb-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
