import type { Router } from 'vue-router'
import { useRouteStore, useUserStore } from '@/store'

export function createRouterGuards(router: Router) {
  const rStore = useRouteStore()
  const uStore = useUserStore()

  router.beforeEach(async (to, from, next) => {
    // 刷新用户信息
    const userInfo = await uStore.getInfo()

    if (rStore.isAddedRoutes) {
      // 如果添加过了 那么就直接next
      next()
      return
    }

    const routes = await rStore.generateRoutes(userInfo)
    // 动态添加路由表
    routes.forEach((route) => {
      router.addRoute(route)
    })

    next()
  })
}
