import { axiosConfig, defaultOption } from './defaultOption'
import { defaultHandlers } from './defaultHandlers'
import { ArcoAxios } from './arcoAxios'

function createAxios() {
  const option = Object.assign(axiosConfig, {
    options: defaultOption,
    handlers: defaultHandlers
  })
  return new ArcoAxios(option)
}

export const axios = createAxios()
