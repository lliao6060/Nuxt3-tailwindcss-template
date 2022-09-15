/* eslint-disable no-console */
export default defineNuxtRouteMiddleware(() => {
  console.log('from middleware test message: hello world!')
})
