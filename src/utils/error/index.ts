export const createError = (msg: string, title = '错误') => {
  throw new Error(`${title}: ${msg}.`)
}
