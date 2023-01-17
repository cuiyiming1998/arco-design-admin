import { Router } from 'vue-router'
import { routeStore } from '@/store/modules/routes'
import { userStore } from '@/store/modules/user'

export function createRouterGuards(router: Router) {
  const rStore = routeStore()
  const uStore = userStore()

  const userInfo = uStore.getInfo()

  const routes = rStore.generateRoutes(userInfo)

  // 动态添加路由表
  routes.map(route => {
    router.addRoute(route)
  })
}
