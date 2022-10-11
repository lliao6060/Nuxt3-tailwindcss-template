const hello = {
  code: 200,
  message: '請求成功',
  data: 'Hello World!',
}

export default async function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject?: unknown) => {
    setTimeout(() => {
      resolve(hello)
    }, 1000)
  })
}
