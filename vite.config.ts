import tailwindcss from '@tailwindcss/vite'
import tanstackRouter from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'



// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   exclude: ['@graphql-typed-document-node/core'],
  // },
  //plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact()],
  build: {
    chunkSizeWarningLimit: 100,
  },
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    // ...,
  ],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 65310,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:65310",
    allowedHosts: [
      '*',
    ],
    proxy: {
      '/graphql': {
        target: 'http://192.168.0.40:65311/graphql/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, ''),
      },
    }
  }
})
