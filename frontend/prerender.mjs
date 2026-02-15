/**
 * Script de pré-rendu SEO post-build
 * Génère un fichier index.html avec les meta tags SEO pour chaque route
 * Exécuté après `vite build` pour que Google indexe correctement chaque page
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

// Configuration SEO par route
const ROUTES = [
  {
    path: '/projets',
    title: 'Projets | Manidina - Solutions Numériques Déployées',
    description: 'Découvrez les projets réalisés par Manidina : Express Sale, Soaharilandy, et d\'autres solutions numériques pour entreprises à Madagascar.',
    image: 'https://manidina.me/express_sale_logo.jpg',
  },
  {
    path: '/portfolio',
    title: 'Portfolio | Christian HERIMANANTSOA - Développeur Full Stack & IA',
    description: 'Portfolio de Christian HERIMANANTSOA : compétences en React, Python, IA, automatisation. Projets déployés en production à Madagascar.',
    image: 'https://manidina.me/images/profile.jpeg',
  },
  {
    path: '/contact',
    title: 'Contact | Manidina - Christian HERIMANANTSOA',
    description: 'Contactez Manidina pour vos projets numériques. Email : contact@manidina.me. Basé à Antananarivo, Madagascar.',
    image: 'https://manidina.me/logo.png',
  },
];

function generateHTML(route) {
  // Lire le index.html principal généré par Vite
  const mainHTML = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  const url = `https://manidina.me${route.path}`;

  // Remplacer les meta tags SEO dans le HTML
  let html = mainHTML;

  // Remplacer le <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Remplacer meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Remplacer canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Remplacer Open Graph
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${route.image}" />`
  );

  // Remplacer Twitter
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${route.image}" />`
  );

  return html;
}

// Générer les fichiers
console.log('🔍 Génération des pages SEO...\n');

for (const route of ROUTES) {
  const dir = path.join(DIST, route.path.slice(1)); // ex: dist/projets
  fs.mkdirSync(dir, { recursive: true });

  const html = generateHTML(route);
  const filePath = path.join(dir, 'index.html');
  fs.writeFileSync(filePath, html, 'utf-8');

  console.log(`  ✅ ${route.path} → ${filePath}`);
  console.log(`     Title: ${route.title}`);
}

console.log('\n🎉 Pré-rendu SEO terminé ! Google verra les bonnes meta tags pour chaque page.\n');
