import { axios } from '@/utils/request'

export function test() {
  return axios.request(
    {
      method: 'GET',
      params: { id: 1 },
      url: 'http://jsonplaceholder.typicode.com/posts'
    },
    {
      isShowMessage: true
    }
  )
}
