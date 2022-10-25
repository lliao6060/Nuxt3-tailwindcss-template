# Nuxt3 + tailwind + pinia + darkMode Template

[nuxt3 documentation](https://v3.nuxtjs.org).

### Introduction
- i18n
預設只有`en`和`tw`，要新增其他語言請至`locales/`裡設置，記得`nuxt.config.js`也要修改
- remock.js
1. 搭配了`$i18n`在切換語言時拿不同語言的資料，新增資料時請至`mock`創建一個`xxx.ts`檔案，並且至`common/types`新增型別，並在頁面中直接使用即可。
2. 封裝了`ohmyfetch的hook`在`composables/useApis`裡組件內可以直接調用，範例請參照`pages/mock-api.vue`

### use plugins
- [Eslint](https://eslint.org)
- [Tailwind CSS v3](https://github.com/tailwindlabs/tailwindcss)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [@iconify/vue svg資源包](https://docs.iconify.design/icon-components/vue/)
- [Pinia](https://github.com/posva/pinia)
  - [為你的 Store 添加持久化配置(Persist)](https://ithelp.ithome.com.tw/articles/10302381)
- [ohmyfetch Nuxt3原生使用](https://github.com/unjs/ohmyfetch)
- [@intlify/nuxt3 支援vueI18n](https://github.com/intlify/nuxt3)
- [remockjs](https://www.npmjs.com/package/remockjs)

### plugins for Tailwind UI:
- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### use template
[oku-nuxt3-template](https://github.com/productdevbook/oku-nuxt3-template)