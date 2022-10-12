// post api/hello/xxx will return Hello, xxx
export default defineEventHandler((event) => {
  const { name } = event.context.params
  return `Hello, ${name}!`
})
