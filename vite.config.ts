import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import type { VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  base: '/',
  devOptions: {
    enabled: true
  }, 
  injectRegister: 'auto',
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,svg}']
  },
  manifest: {
    name: 'My Ruck Club',
    short_name: 'myruck',
    description: 'Just another ruck club focused web app.',
    theme_color: '#f49f4f',
    background_color: '#282320',
    icons: [
      {
        src: 'android/android-launchericon-192-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'android/android-launchericon-512-512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'android/android-launchericon-512-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'android/android-launchericon-512-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VitePWA(pwaOptions),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      external: ['@/plugins/vuetify'],
    },
  },
})
