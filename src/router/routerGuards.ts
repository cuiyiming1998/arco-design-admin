import type { Router } from 'vue-router'
import { useRouteStore, useUserStore } from '@/store'

export function createRouterGuards(router: Router) {
  const rStore = useRouteStore()
  const uStore = useUserStore()

  const userInfo = uStore.getInfo()

  const routes = rStore.generateRoutes(userInfo)

  // 动态添加路由表
  routes.forEach((route) => {
    router.addRoute(route)
  })
}
