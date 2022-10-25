# Nuxt3 + tailwind + pinia + darkMode Template

[nuxt3 documentation](https://v3.nuxtjs.org).

### Introduction
- #### i18n
  預設只有`en`和`tw`，要新增其他語言請至`locales/`裡設置，記得`nuxt.config.js`也要修改
- #### remock.js
1. 搭配了`$i18n`在切換語言時拿不同語言的資料，新增資料時請至`mock`創建一個`xxx.ts`檔案，並且至`common/types`新增型別，並在頁面中直接使用即可
2. 封裝了`ohmyfetch的hook`在`composables/useApis`裡組件內可以直接調用，範例請參照`pages/mock-api.vue`
4. 你也可以搭配`Nuxt`的`server`一起使用，demo請參照`server/api user.ts`以及頁面`pages/use-featch`
  - 這邊須注意: 使用`Nuxt`提供的原生`useFetch`方法[無法包成`function`重複呼叫](https://github.com/nuxt/framework/discussions/3779)，因此想要搭配`i18n`依照語言去拉`api`的話必須每次都重整頁面
- #### Headless UI
  相關的組件放在`pages/components-demo`

### Use Plugins
- [Eslint](https://eslint.org)
- [Tailwind CSS v3](https://github.com/tailwindlabs/tailwindcss)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [@iconify/vue](https://docs.iconify.design/icon-components/vue/)
- [Pinia](https://github.com/posva/pinia)
  - [為你的 Store 添加持久化配置(Persist)](https://ithelp.ithome.com.tw/articles/10302381)
- [ohmyfetch Nuxt3原生使用](https://github.com/unjs/ohmyfetch)
- [@intlify/nuxt3](https://github.com/intlify/nuxt3)
- [remockjs](https://www.npmjs.com/package/remockjs)

### plugins for Tailwind UI:
- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Use template
[oku-nuxt3-template](https://github.com/productdevbook/oku-nuxt3-template)