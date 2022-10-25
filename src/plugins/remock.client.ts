/* eslint-disable @typescript-eslint/no-unused-vars */
import { mock } from 'remockjs'
import { useI18n } from 'vue-i18n'

const timeout = 1500

const userList = (locale: string) => {
  return mock({
    'list|10-15': [{
      'id|+1': 1,
      'name': `@name("${locale}")`,
      'profession': `@word("${locale}", 3, 5)`,
      'email': '@email("gmail.com", 8, 12)',
      'avatar': 'image("50x50", @color(), "#22222")',
    }],
  })
}

const createMockApi = (api: Function) => {
  return new Promise((resolve, reject?: unknown) => {
    setTimeout(() => {
      resolve(api)
    }, timeout)
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  const cookieLangages = useCookie('locale')
  const { locale } = useI18n()
  const currentLang = computed(() => {
    let lang = cookieLangages.value.slice(3).toLocaleLowerCase() ?? 'tw'
    if (lang === 'us')
      lang = 'en'
    return lang
  })

  const getUserList = createMockApi(userList(currentLang.value))
  return {
    provide: {
      getUserList,
    },
  }
})
