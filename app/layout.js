import './globals.css';
import AppShell from '@/components/AppShell';

export const metadata = {
  metadataBase: new URL('https://manidina.me'),
  title: {
    default: 'Christian Herimanantsoa — Software Developer & AI Automation',
    template: '%s | Manidina.me',
  },
  description:
    'Software Developer spécialisé en AI Automation : Laravel, React, n8n et LangChain pour automatiser les emails, la comptabilité et les processus métier.',
  keywords: [
    'développeur Madagascar', 'full-stack', 'automatisation', 'n8n', 'agents IA',
    'React', 'Next.js', 'Laravel', 'FastAPI', '.NET', 'Pipedrive', 'Make',
    'LangChain', 'comptabilité automatisée', 'Reference.mg', 'Enfants De La Rue',
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
    title: 'Christian Herimanantsoa — Software Developer & AI Automation',
    description:
      'Software Developer, Laravel/React et AI Automation avec n8n/LangChain pour les entreprises et les organisations.',
    images: [{ url: '/images/profile.jpeg', width: 120, height: 120, alt: 'Christian Herimanantsoa' }],
  },
  twitter: {
    card: 'summary',
    title: 'Christian Herimanantsoa — Software Developer & AI Automation',
    description: 'Développement Laravel/React, automatisation n8n/LangChain, systèmes d’information et gestion comptable.',
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
              jobTitle: 'Software Developer & AI Automation Specialist',
              email: 'mailto:contact@manidina.me',
              telephone: '+261340425089',
              address: { '@type': 'PostalAddress', addressLocality: 'Antananarivo', addressCountry: 'MG' },
              sameAs: ['https://github.com/herimanantsoa51', 'https://www.linkedin.com/in/christian-manidina/', 'https://www.upwork.com/freelancers/~010f961419cc492dcd'],
              knowsAbout: [
                'React', 'Next.js', 'TypeScript', 'Laravel', 'FastAPI',
                'n8n', 'LangChain', 'AI Automation', 'Accounting Automation', 'Information Systems', 'PostgreSQL', 'Docker', 'Google Cloud',
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