import { axios } from '@/utils/request'
import type { LoginEncrypted } from '@/hooks/useLogin/types.d'

export function login(data: LoginEncrypted) {
  return axios.request<string>(
    {
      method: 'POST',
      data,
      url: '/system/login',
    },
    {
      isShowMessage: true,
    },
  )
}
