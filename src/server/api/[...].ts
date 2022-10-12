// post api/xxx will return all non-matched api
export default defineEventHandler((event) => {
  return {
    code: 200,
    data: {
      url: event.req.url,
    },
    message: '/api 下不匹配的路由都會進入這裡',
  }
})
