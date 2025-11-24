import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Papers | Alpha Vector Technologies',
  description: 'Advanced frameworks for algorithmic accountability, distributed system governance, and executive liability in the age of artificial intelligence.',
  openGraph: {
    title: 'Research Papers | Alpha Vector Technologies',
    description: 'Cutting-edge research in AI governance, blockchain security, and algorithmic accountability.',
    type: 'website',
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}