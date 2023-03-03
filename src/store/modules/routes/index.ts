import type { RouteRecordRaw } from 'vue-router'
import type { RouteStoreState, ServerRoute } from './types'
import defaultRouters from '@/router/defaultRouter'
import { PagesPath } from '@/enums/pages'

const useRouteStore = defineStore('route', {
  state: (): RouteStoreState => ({
    routes: defaultRouters,
    serverRoutes: [],
  }),

  getters: {
    getRoutes: (state): RouteRecordRaw[] => {
      return state.routes
    },
    getServerRoutes: (state): ServerRoute[] => {
      return state.serverRoutes
    },
  },

  actions: {
    setRoutes(routes: any) {
      this.routes = routes
    },

    setServerRoutes(routes: ServerRoute[]) {
      this.serverRoutes = routes
    },

    generateRoutes(_userData: any): RouteRecordRaw[] {
      // userData是服务端获取的用户数据
      // TODO:
      // 服务端获取路由表, 动态引入
      // 组装路由数据 -> RouteRecordRaw
      const routes: ServerRoute[] = [
        {
          id: '0',
          component: 'Layout',
          name: 'name',
          path: PagesPath.Dashboard,
          meta: {
            icon: 'icon-menu-fold',
            title: 'dashboard',
          },
          parentId: '0',
          parentIds: '29494',
          children: [
            {
              id: '2',
              component: 'Home',
              name: '22222',
              meta: {
                icon: null,
                title: 'workplace',
              },
              path: PagesPath.Workplace,
              parentId: '0',
              parentIds: '29494',
            },
          ],
        },
      ]
      const records = formatServerRoutes(routes)
      this.setServerRoutes(routes)
      this.setRoutes(records)
      return records
    },
  },
})

function formatServerRoutes(routes: ServerRoute[]) {
  return routes as unknown as RouteRecordRaw[]
}

export default useRouteStore
