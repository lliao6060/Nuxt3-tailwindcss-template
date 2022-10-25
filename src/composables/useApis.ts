import { apiFetch } from '../server/api'

export default function useAPIs() {
  interface ApiError {
    code: number
    error: string
  }

  const isApiError = (x: any): x is ApiError => {
    return typeof x.code === 'number'
  }

  // mock api用
  async function useMockApi(api: any): Promise<any> {
    try {
      const res = await api
      if (res)
        return res

      else
        throw new Error(`errorType.${res.res}`)
    }
    catch (err) {
      if (isApiError(err))
        apiFail(`${err.code} ${err.error}`)
    }
  }

  // 正式api
  async function useApi(url: string, method: string, data?: any) {
    const keyName = method === 'get' ? 'params' : 'data'
    try {
      const res = await apiFetch(url, {
        [keyName]: data,
      }).then((res: { data: any }) => res.data ?? res)

      return res
      // if (res.res === 0) {
      //   return res;
      // } else {
      //   throw new Error(`errorType.${res.res}`)
      // }
    }
    catch (err) {
      if (isApiError(err))
        apiFail(`${err.code} ${err.error}`)
    }
  }

  // 錯誤測試用
  function testErrorApi(): Promise<any> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ code: 123, error: 'Error!' })
    })
  }

  async function testApiFail() {
    try {
      return await testErrorApi()
    }
    catch (error: unknown) {
      if (isApiError(error))
        apiFail(`${error.code} ${error.error}`)
    }
  }

  function apiFail(msg: string) {
    // eslint-disable-next-line no-console
    console.log(msg)
  }

  return {
    useMockApi,
    useApi,
    testApiFail,
    apiFail,
  }
}
