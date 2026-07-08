# manidina.me

Site vitrine de **MANIDINA** — solutions numériques, IA et automatisation pour entreprises à Madagascar.

**Créé et géré par** [Christian HERIMANANTSOA](https://manidina.me/portfolio)

## Stack

- **Frontend** : React 19 + Vite 7 + Framer Motion
- **i18n** : Français / Anglais (i18next)
- **Routing** : React Router 7
- **Contact** : Webhook n8n
- **Déploiement** : GitHub Pages (via Actions)

## Structure

```
frontend/
├── src/
│   ├── components/    # Header, Footer, Hero, Services, etc.
│   ├── pages/         # Home, Projects, Portfolio, Contact, Legal
│   ├── locales/       # en.json, fr.json
│   └── styles/        # Design system global
├── public/images/     # Captures d'écran des projets
└── dist/              # Build de production
```

## Développement

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
cd frontend
npm run build
```

Le build génère des pages HTML statiques pré-redues pour le SEO (via prerender.mjs).
