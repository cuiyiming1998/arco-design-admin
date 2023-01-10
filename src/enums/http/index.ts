/**
 * @description:  常用的contentTyp类型
 */
export enum ContentType {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

/**
 * @description: 请求code集
 */
export enum ResponseCode {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 10042,
  UNAUTHORIZED = 401,
  TYPE = 'success'
}
