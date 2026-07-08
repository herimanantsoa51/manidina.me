import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Framer Motion est gros — chunk séparé
          'vendor-framer': ['framer-motion'],
          // i18next + react-i18next
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // React DOM et router
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },
  // Optimisation des imports pour les grosses dépendances
  optimizeDeps: {
    include: ['framer-motion', 'i18next', 'react-i18next']
  }
})
