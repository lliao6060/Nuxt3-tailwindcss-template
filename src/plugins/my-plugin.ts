export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `from plugins test message: Hello ${msg}!`,
    },
  }
})
