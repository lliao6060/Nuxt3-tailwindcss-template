const list = {
  code: 200,
  message: '請求成功',
  result: {
    list: [
      { id: 1, title: '標題1' },
      { id: 2, title: '標題2' },
    ],
  },
}

export default async function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject?: any) => {
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}
