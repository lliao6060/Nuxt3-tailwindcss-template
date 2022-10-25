import { mock } from 'remockjs'

let counter = 0

const mockUser = (locale: unknown) => {
  return mock({
    name: `@name("${locale}")`,
    gendar({ natural }) {
      const gendarMap = locale === 'tw' ? ['男', '女'] : ['male', 'female']
      const gendarIndex = natural(gendarMap.length - 1)
      return gendarMap[gendarIndex]
    },
  })
}

export default defineEventHandler(async (event) => {
  const { lang } = useQuery(event) // 解析查詢參數
  await new Promise(resolve => setTimeout(resolve, 2000)) // 等待 2 秒
  counter += 1
  const user = mockUser(lang)
  return {
    user,
    counter,
  }
})
