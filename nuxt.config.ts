import { defineNuxtConfig } from 'nuxt/config'

// 自動導入
const autoImportOpts = {
  imports: [
    'vue',
    'vue-router',
    'pinia',
    {},
  ],
  dts: './auto-imports.d.ts',
}

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3 Demo',
  },
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    '@intlify/nuxt3',
    '@nuxtjs/color-mode',
    ['unplugin-auto-import/nuxt', autoImportOpts],
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'zh-TW',
      fallbackLocale: 'zh-TW',
      availableLocales: ['en-US', 'zh-TW'],
      sync: true,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@intlify/nuxt3', './type.d.ts'],
      },
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  vite: {
    logLevel: 'info',
  },
})
