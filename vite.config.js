import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        inicio: 'inicio.html',
        servicios: 'servicios.html',
        nosotros: 'nosotros.html',
        proyectos: 'proyectos.html',
        contacto: 'contacto.html',
        privacidad: 'privacidad.html',
        terminos: 'terminos.html',
        cookies: 'cookies.html'
      }
    }
  }
})
