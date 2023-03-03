import { JSEncrypt } from 'jsencrypt'
import { isValidValue } from '../is'
import { getCookie, setCookieByExpire } from './cookie'
import { getPublicKey } from '@/api/common/publicKey'

const COOKIE_KEY = 'PUBLIC_KEY'

/**
 * 最长加密长度
 * @type {number}
 */
const MAX_ENCRYPT_BLOCK = 117
/**
 * 最长解码长度
 * @type {number}
 */
const MAX_DECRYPT_BLOCK = 128

export const getKey = async (): Promise<string> => {
  let publicKey: string = getCookie(COOKIE_KEY) || ''
  if (!isValidValue(publicKey)) {
    // 公钥为空, 需要去服务端获取
    const { data } = await getPublicKey()
    publicKey = data
    setCookieByExpire(COOKIE_KEY, publicKey, 5)
  }

  return publicKey
}

export const encrypt = (data: any, key: string) => {
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(
    `-----BEGIN PUBLIC KEY-----${key}-----END PUBLIC KEY-----`,
  )
  let bufTmp = ''
  let hexTmp = ''
  let result = ''
  let offSet = 0
  const buffer = Buffer.from(JSON.stringify(data))
  const inputLen = buffer.length
  while (inputLen - offSet > 0) {
    if (inputLen - offSet > MAX_ENCRYPT_BLOCK)
      bufTmp = buffer.slice(offSet, offSet + MAX_ENCRYPT_BLOCK).toString()
    else
      bufTmp = buffer.slice(offSet, inputLen).toString()

    hexTmp = encrypt.encrypt(bufTmp.toString()).toString()
    result += atob(hexTmp)
    offSet += MAX_ENCRYPT_BLOCK
  }
  return btoa(result)
}
