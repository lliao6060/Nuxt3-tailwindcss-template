const list = {
  code: 200,
  data: {
    list: [
      { id: 1, title: '標題1' },
      { id: 2, title: '標題2' },
    ],
  },
}

export default defineEventHandler(async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject?: unknown) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
})
