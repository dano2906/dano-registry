import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['shadcn-nuxt', '@nuxt/fonts', '@nuxtjs/color-mode'],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        preload: true,
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        styles: ['normal'],
        display: 'swap',
        fallbacks: ['system-ui'],
        global: true,
      },
    ],
    devtools: true,
  },
  components: {
    dirs: ['~/registry', '~/components'],
  },
  imports: {
    dirs: ['~/registry', '~/components', '~/lib', '~/utils'],
  },
})
