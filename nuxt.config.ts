// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-nested": false
    },
  },

  css: [
    "~/assets/css/tailwind.css"
  ],

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/content"
  ],

  image: {
    provider: 'netlify',
  },

  googleFonts: {
    families: {
      "Squada One": true
    },
    preload: true
  },
})
