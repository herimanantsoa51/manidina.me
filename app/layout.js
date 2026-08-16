import './globals.css';
import AppShell from '@/components/AppShell';

export const metadata = {
  metadataBase: new URL('https://manidina.me'),
  title: {
    default: 'Christian Herimanantsoa — Développeur Full-Stack & Automatisation IA',
    template: '%s | Manidina.me',
  },
  description:
    'Développeur full-stack (React, Next.js, Laravel, .NET, FastAPI) et spécialiste en automatisation (n8n, agents IA). Projets : plateforme Taniko, Manidina Network, RAG Malagasy, gestion de données aéroportuaires (89 000+ aéroports).',
  keywords: [
    'développeur Madagascar', 'full-stack', 'automatisation', 'n8n', 'agents IA',
    'React', 'Next.js', 'Laravel', 'FastAPI', '.NET', 'Pipedrive', 'Make',
    'Christian Herimanantsoa', 'Manidina', 'Antananarivo',
  ],
  authors: [{ name: 'Christian Herimanantsoa', url: 'https://manidina.me' }],
  creator: 'Christian Herimanantsoa',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://manidina.me',
    siteName: 'Manidina.me',
    title: 'Christian Herimanantsoa — Développeur Full-Stack & Automatisation IA',
    description:
      'Solutions digitales, automatisation (n8n, agents IA) et développement full-stack. Basé à Antananarivo, Madagascar — je travaille avec des clients du monde entier.',
    images: [{ url: '/images/profile.jpeg', width: 120, height: 120, alt: 'Christian Herimanantsoa' }],
  },
  twitter: {
    card: 'summary',
    title: 'Christian Herimanantsoa — Développeur Full-Stack & Automatisation IA',
    description: 'Développement full-stack, automatisation n8n et agents IA. Basé à Antananarivo, Madagascar.',
    images: ['/images/profile.jpeg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://manidina.me' },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'HERIMANANTSOA Manitriniaina Christian',
              url: 'https://manidina.me',
              jobTitle: 'Développeur Full-Stack & Automatisation IA',
              email: 'mailto:contact@manidina.me',
              telephone: '+261340425089',
              address: { '@type': 'PostalAddress', addressLocality: 'Antananarivo', addressCountry: 'MG' },
              sameAs: ['https://github.com/herimanantsoa51'],
              knowsAbout: [
                'React', 'Next.js', 'TypeScript', 'Laravel', '.NET', 'FastAPI',
                'n8n', 'Make', 'Agents IA', 'Pipedrive', 'PostgreSQL', 'Docker', 'Google Cloud',
              ],
            }),
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}