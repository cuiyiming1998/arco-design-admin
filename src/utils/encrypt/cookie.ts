import Cookies from 'js-cookie'

export function getCookie(key: string) {
  return Cookies.get(key)
}

export function setCookieByExpire(key: string, cookie: string, time = 5) {
  const expires = new Date(new Date().valueOf() + time * 60 * 1000)

  return Cookies.set(key, cookie, { expires })
}
