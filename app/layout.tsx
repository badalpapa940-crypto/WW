import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quantum Advisory Partners | Strategic Finance & Business Advisory',
  description:
    'Quantum Advisory Partners helps Indian businesses identify opportunities, improve financial performance, strengthen capital decisions and build the operating discipline needed for sustainable growth.',
  keywords: [
    'business advisory India',
    'fractional CFO',
    'capital structure advisory',
    'IPO readiness',
    'strategic finance',
    'working capital',
  ],
  openGraph: {
    title: 'Quantum Advisory Partners | Strategic Finance & Business Advisory',
    description:
      'Build a better business. Build a more valuable business. Strategic finance, performance improvement, capital decisions and institutional readiness for growing Indian businesses.',
    type: 'website',
    siteName: 'Quantum Advisory Partners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Advisory Partners',
    description:
      'Strategic finance, performance improvement, capital decisions and institutional readiness for growing Indian businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
