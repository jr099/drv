import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChatbotWidget } from '../components/ChatbotWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jrdriving | Convoyage automobile intelligent',
  description:
    'Plateforme de convoyage automobile jrdriving par Galaxj Air Digital : devis IA, suivi mission, gestion chauffeurs et automatisations B2B/B2C.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
