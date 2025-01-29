// https://nuxt.com/docs/api/configuration/nuxt-config
import { theme } from './tailwind.config'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:false,
  runtimeConfig: {
    public: {
      apiurl: process.env.API_URL || 'https://lp3i.ac.id/wp-json'
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