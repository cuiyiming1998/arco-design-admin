import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestHandlers {
  /**
   * @description: 请求之前处理配置
   */
  beforeRequest?: (
    config: AxiosRequestConfig,
    options?: RequestOptions
  ) => AxiosRequestConfig

  /**
   * @description: 请求成功处理
   */
  handleResponseData?: <T = unknown>(
    res: AxiosResponse<BasicResponse<T>>,
    options: RequestOptions
  ) => T

  /**
   * @description: 请求失败处理
   */
  handleError?: (e: Error) => Promise<any>

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptor?: (
    config: AxiosRequestConfig,
    options: BasicAxiosOptions
  ) => AxiosRequestConfig

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptor?: (res: AxiosResponse<any>) => AxiosResponse<any>

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorCatch?: (error: AxiosError) => void

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorCatch?: (error: AxiosError) => void
}

export interface RequestOptions {
  // 是否显示后端message
  isShowMessage?: boolean
  // 在接口code不等于successCode时是否显示后端message
  isShowErrorMessage?: boolean
  // 在接口code等于successCode时是否显示后端message
  isShowSuccessMessage?: boolean
  // 成功的默认message
  successMessage?: string
  // 失败的默认message
  errorMessage?: string
}

export interface BasicAxiosOptions extends AxiosRequestConfig {
  handlers?: RequestHandlers
  options?: RequestOptions
}

// 上传文件
export interface UploadFileParams {
  // 其他参数
  data?: Recordable
  // 文件参数接口字段名
  name?: string
  // 文件
  file: File | Blob
  // 文件名称
  filename?: string
  [key: string]: any
}
