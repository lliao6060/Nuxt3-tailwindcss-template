/* eslint-disable @typescript-eslint/no-unused-vars */
const data = (name: unknown) => {
  return {
    code: 200,
    data: `Hello ${name}`,
  }
}

export default defineEventHandler(async (event) => {
  const { name } = useQuery(event) // 解析查詢參數
  return new Promise((resolve, reject?: unknown) => {
    setTimeout(() => {
      resolve(data(name))
    }, 1000)
  })
})
