import { axios } from '@/utils/request'

export function test() {
  return axios.request(
    {
      method: 'GET',
      data: '',
      url: 'http://www.baidu.com'
    },
    {
      isShowMessage: true
    }
  )
}
