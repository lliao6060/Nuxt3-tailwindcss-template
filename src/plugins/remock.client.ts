/* eslint-disable @typescript-eslint/no-unused-vars */
const timeout = 1500

const createMockApi = (api: Function) => {
  return new Promise((resolve, reject?: unknown) => {
    setTimeout(() => {
      resolve(api)
    }, timeout)
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      createMockApi,
    },
  }
})
