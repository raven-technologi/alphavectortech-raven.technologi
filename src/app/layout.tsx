import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://alphavectortech.com'),
  title: {
    default: 'Alpha Vector Tech | Gavin Sangedha | ABN: 50 353 196 500',
    template: '%s | Alpha Vector Tech'
  },
  description: 'Forensic intelligence and algorithmic accountability research firm. Founded by Gavin Sangedha. ABN: 50 353 196 500',
  authors: [{ name: 'Gavin Sangedha', url: 'https://alphavectortech.com' }],
  creator: 'Gavin Sangedha',
  publisher: 'Alpha Vector Tech',
  keywords: [
    'Gavin Sangedha',
    'Alpha Vector Tech',
    'ABN 50 353 196 500',
    'forensic intelligence',
    'algorithmic accountability',
    'executive liability',
    'mens rea vector',
    'byzantine calculus',
    'sangedha framework'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://alphavectortech.com',
    siteName: 'Alpha Vector Tech',
    title: 'Alpha Vector Tech - Forensic Intelligence Research',
    description: 'Founded by Gavin Sangedha. Australian Business Number: 50 353 196 500',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Vector Tech | Gavin Sangedha',
    description: 'Forensic Intelligence Research Firm | ABN: 50 353 196 500',
    creator: '@gavinsangedha',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Gavin Sangedha" />
        <meta name="company" content="Alpha Vector Tech" />
        <meta name="abn" content="50 353 196 500" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}