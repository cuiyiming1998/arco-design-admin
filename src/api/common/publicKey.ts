import { axios } from '@/utils/request'

export function getPublicKey() {
  return axios.request<string>({
    method: 'GET',
    url: '/api/v1/common/public-key',
  })
}
