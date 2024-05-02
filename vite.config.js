import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/dist/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    host: 'localhost',
    port: 8010,
    hmr: true,
    proxy: {
      "/api": {
        // target: 'http://47.120.5.226:7078',
        target: "http://localhost:7078",
        changeOrigin: true,
        pathRewrite: {
          "^api": "/api"
        }
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 3000,
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    chunkFileNames: (chunkInfo) => {
      const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
      const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
      return `js/${fileName}/[name].[hash].js`;
    }
  }
})
