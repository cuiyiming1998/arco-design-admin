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
  handleResponseData?: <T = BasicResponse>(
    res: AxiosResponse<T>,
    options: RequestOptions
  ) => T | AxiosResponse<T> | null

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

export interface RequestOptions {
  isShowMessage?: boolean
}
