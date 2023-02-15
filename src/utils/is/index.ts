import { isNull, isUndefined } from 'lodash-es'

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}
/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function')
}

/**
 * description
 * 判断值是否合法
 *
 * @param { Unknown } target
 * @return { Boolean } 是否合法
 *
 */
export function isValidValue(target: any) {
  const type = isNull(target) || isUndefined(target)
  const value = ['undefined', 'null', 'Null', ''].includes(target)
  return !type && !value
}
