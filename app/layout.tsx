import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans'
});

export const metadata: Metadata = {
  title: 'Shaforms - Building Excellence across India',
  description: 'Premier construction firm with expertise in Residential, Commercial, and Comprehensive turnkey solutions. Our commitment is founded on delivering exceptional quality and fulfilling all project promises.',
  openGraph: {
    images: [
      
    ],
  },
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
