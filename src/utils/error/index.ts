export const createError = (msg: string, title: string = '错误') => {
  throw new Error(`${title}: ${msg}.`)
}
