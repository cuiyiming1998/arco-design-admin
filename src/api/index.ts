import { axios } from '@/utils/request'

export function test() {
  return axios.request(
    {
      method: 'GET',
      params: { id: 1 },
      url: '/api/v1/system/user/getInfo'
    },
    {
      isShowMessage: true
    }
  )
}
