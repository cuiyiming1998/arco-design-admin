import { AxiosError, AxiosResponse } from 'axios'
import { RequestHandlers, RequestOptions } from './types.d'
import settings from '@/config/settings'
import { cloneDeep } from 'lodash-es'
import { Message } from '@arco-design/web-vue'
import { createError } from '../error'

type Response<T = unknown> = BasicResponse<T>

/**
 * description
 * 默认请求处理方法
 *
 */
export const defaultHandlers: RequestHandlers = {
  handleResponseData<T = unknown>(
    res: AxiosResponse<Response<T>>,
    options: RequestOptions
  ): T | AxiosResponse<Response<T>> {
    const { raw, throwErrorWhenDataIsNull } = options
    if (!options || raw) {
      // 直接返回原生res
      return res
    }

    // 处理返回值不合法的情况
    handleInvalidData(res, !!throwErrorWhenDataIsNull)

    createMessages(res.data, options)
    // 成功后在外面resolve(result)
    if (isSuccessResponse(res.data)) {
      const { data } = res.data

      const result = cloneDeep(data)
      // showMessage的逻辑
      // 成功 直接返回数据
      return result
    }
    // 不成功的情况会在外面reject掉
    // TODO:
    // 弹提示的逻辑前面已经处理完了, 这里需要添加业务逻辑
    // 比如跳转登录页面等

    return createError(
      res.data.msg || '请求失败',
      'defaultHandlers - handleResponseData'
    )
  },

  handleError(e: Error) {
    return new Promise((_resolve, reject) => {
      reject(e)
    })
  },

  responseInterceptorCatch(e: AxiosError) {
    const { code, text } = getError(e)
    console.log(`${code}: ${text}`)
  },

  requestInterceptorCatch(e: AxiosError) {
    const { code, text } = getError(e)
    console.log(`${code}: ${text}`)
  }
}

/**
 * description
 * 处理返回值不合法的情况
 *
 * @param { AxiosResponse } res 返回的原生数据
 * @return { Void }
 *
 */
const handleInvalidData = (res: AxiosResponse, isThrow: boolean) => {
  const { data } = res
  if (!data && isThrow) {
    createError('返回值为空', 'defaultHandlers - handleInvalidData')
  }
}

/**
 * description
 * 判断是否是成功的response
 *
 * @param { Number } code 后端返回的code
 * @param { Boolean } success 后端返回的success字段
 *
 */
const isSuccessResponse = (data: Response) => {
  const { code, success } = data
  const { successCode } = settings
  // 判断code是否是successCode
  const flag = Array.isArray(successCode)
    ? successCode.includes(code)
    : successCode === code

  return success && flag
}

/**
 * description
 * 成功或错误弹窗提示
 *
 * @param { Response } data 后端返回数据
 * @return { Void }
 *
 */
const createMessages = (data: Response, options: RequestOptions) => {
  const {
    isShowMessage,
    isShowSuccessMessage,
    isShowErrorMessage,
    successMessage,
    errorMessage
  } = options

  if (!isShowMessage) {
    return
  }

  const { msg } = data

  if (isSuccessResponse(data) && isShowSuccessMessage) {
    Message.success(msg || successMessage)
  } else if (!isSuccessResponse(data) && isShowErrorMessage) {
    Message.error(msg || errorMessage)
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
