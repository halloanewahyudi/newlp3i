// https://nuxt.com/docs/api/configuration/nuxt-config
import { theme } from './tailwind.config'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiurl: process.env.API_URL || 'http://localhost:3000'
    }
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'v-gsap-nuxt',
    'nuxt-splide',
    'nuxt-bootstrap-icons'
  ],
  
  css: [
    'assets/style.css'
  ],
  splide: {
    theme: 'default'
  }
})