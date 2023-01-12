import { AxiosRequestConfig } from 'axios'
import { RequestOptions } from './types'
import settings from '@/config/settings'
import { ContentType } from '@/enums/http'

const { requestTimeout, baseURL } = settings

// 默认axios配置
export const axiosConfig: AxiosRequestConfig = {
  timeout: requestTimeout * 1000,
  baseURL,
  headers: {
    'Content-Type': ContentType.JSON
  }
}

// 系统请求配置
export const defaultOption: RequestOptions = {
  raw: false,
  isShowMessage: true,
  isShowErrorMessage: true,
  isShowSuccessMessage: false,
  successMessage: '请求成功',
  errorMessage: '请求失败'
}
