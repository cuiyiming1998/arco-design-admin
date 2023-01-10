import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { isFunction } from '../is'
import { BasicAxiosOptions, RequestOptions, RequestHandlers } from './types'
import { cloneDeep } from 'lodash-es'

export class ArcoAxios {
  private options: BasicAxiosOptions
  private instance: AxiosInstance
  constructor(options: BasicAxiosOptions) {
    this.options = options
    this.instance = this.createInstance(options)
    this.createInterceptors()
    console.log('实例的Options', options)
  }

  /**
   * description
   * 创建 Axios 实例
   *
   * @param {BasicAxiosOptions} options 传给axios的配置
   * @return {AxiosInstance} 创建好的实例
   *
   */
  private createInstance(options: BasicAxiosOptions): AxiosInstance {
    return axios.create(options)
  }

  /**
   * description
   * 获取处理request的handlers
   *
   * @param { Void }
   * @return { RequestHandlers | undefined }
   *
   */
  private getHandlers(): RequestHandlers {
    const { handlers } = this.options
    return handlers || {}
  }

  /**
   * description
   * 给创建好的Axios实例添加拦截器方法
   *
   * @param { Void }
   * @return { Void }
   *
   */
  private createInterceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      config => this.createRequestInterceptor(config),
      e => this.createRequestInterceptorCatch.bind(this, e)
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      this.createResponseInterceptor,
      this.createResponseInterceptorCatch.bind(this)
    )
  }

  /**
   * description
   * 创建请求拦截器
   *
   * @param { AxiosConfig } config
   * @return { AxiosConfig } config
   *
   */
  private createRequestInterceptor(config: AxiosRequestConfig) {
    const handlers = this.getHandlers()
    const { requestInterceptor } = handlers
    if (isFunction(requestInterceptor)) {
      config = requestInterceptor(config, this.options)
    }
    return config
  }

  /**
   * description
   * 创建请求拦截错误处理
   *
   * @param { Error } e 错误信息
   * @return { Void }
   *
   */
  private createRequestInterceptorCatch(e: AxiosError) {
    const handlers = this.getHandlers()
    const { requestInterceptorCatch } = handlers
    if (isFunction(requestInterceptorCatch)) {
      return requestInterceptorCatch(e)
    }
    return undefined
  }

  /**
   * description
   * 创建响应拦截
   *
   * @param { AxiosResponse } res 返回的数据
   * @return { AxiosResponse } 处理好的数据
   *
   */
  private createResponseInterceptor(res: AxiosResponse<any>) {
    const handlers = this.getHandlers()
    const { responseInterceptor } = handlers
    if (isFunction(responseInterceptor)) {
      res = responseInterceptor(res)
    }
    return res
  }

  /**
   * description
   * 响应拦截器 错误处理
   *
   * @param { Error }
   * @return { Void }
   *
   */
  private createResponseInterceptorCatch(e: AxiosError) {
    const handlers = this.getHandlers()
    const { responseInterceptorCatch } = handlers
    if (isFunction(responseInterceptorCatch)) {
      return responseInterceptorCatch(e)
    }
    return undefined
  }

  request<T = unknown>(conf: AxiosRequestConfig, options?: RequestOptions) {
    const handlers = this.getHandlers()
    const config = cloneDeep(conf)
    const { handleResponseData, beforeRequest, handleError } = handlers
    const requestOptions = this.assignOptions(options)
    // 执行beforeRequest
    if (isFunction(beforeRequest)) {
      beforeRequest(config, requestOptions)
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: AxiosResponse<BasicResponse<T>>) => {
          if (isFunction(handleResponseData)) {
            try {
              const response = handleResponseData(res, requestOptions)
              return resolve(response)
            } catch (err) {
              return reject(err || new Error('请求出错'))
            }
          }
        })
        .catch((err: Error) => {
          // 执行错误处理
          if (isFunction(handleError)) {
            reject(handleError(err))
          }
          reject(err)
        })
    })
  }

  private assignOptions(options?: RequestOptions): RequestOptions {
    const { options: basicOptions } = this.options
    const requestOptions: RequestOptions = Object.assign(
      {},
      basicOptions,
      options
    )
    return requestOptions
  }
}
