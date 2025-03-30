import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // build: {
  //   rollupOptions: {
  //     external: [`react-router-dom`], //externalize thsi module when building Vite = ignore it initially when building then add it on later
  //   }
  // }
})
