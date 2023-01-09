import type { UserOptions } from 'vite-plugin-pages'

export const pagesConfig: UserOptions = {
  extendRoute(route, _parent) {
    if ('/' === route.path) {
      route.redirect = '/home'
    }
  }
}
