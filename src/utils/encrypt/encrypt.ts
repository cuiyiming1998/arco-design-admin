import { getCookie } from './cookie'
import { getPublicKey } from '@/api/common/publicKey'
import { isValidValue } from '../is'

const COOKIE_KEY = 'PUBLIC_KEY'

export const getKey = (): string => {
  let publicKey = getCookie(COOKIE_KEY)
  if (!isValidValue(publicKey)) {
    // 公钥为空, 需要去服务端获取
    getPublicKey().then(res => {
      console.log(res)
    })
  }

  return publicKey as string
}
