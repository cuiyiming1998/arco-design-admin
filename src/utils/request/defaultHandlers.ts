import { AxiosError } from 'axios'
import { RequestHandlers } from './types'

// 默认请求处理方法
export const defaultHandlers: RequestHandlers = {
  handleError(e: Error) {
    return new Promise((_resolve, reject) => {
      reject(e)
    })
  },

  responseInterceptorCatch(e: AxiosError) {
    console.log(e)
    const { code, text } = getError(e)
    console.log(`${code}: ${text}`)
  },

  requestInterceptorCatch(e: AxiosError) {
    const { code, text } = getError(e)
    console.log(`${code}: ${text}`)
  }
}

const getError = (e: AxiosError) => {
  const { response, request } = e
  let code: number = 0
  let text: string = ''
  if (response) {
    const { status, statusText } = response
    code = status
    text = statusText
  } else if (request) {
    const { status, statusText } = request
    code = status || e.code
    text = statusText || e.message
  }

  return {
    code,
    text
  }
}
