import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Removed base path for Vercel deployment
  // base: "Ecommerce-website", // Only needed for GitHub Pages
});