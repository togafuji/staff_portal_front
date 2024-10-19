import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import yaml from '@rollup/plugin-yaml'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [vue(), yaml(), vueJsx(), VueDevTools()],
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['yaml']
  }
})
