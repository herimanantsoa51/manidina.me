import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n'; // Importation de la configuration i18n

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Déclencher l'événement pour le pré-rendu SEO
document.dispatchEvent(new Event('render-event'))
