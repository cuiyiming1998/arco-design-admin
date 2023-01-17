import defaultRouters from '@/router/defaultRouter'
import store from '../../index'
import { RouteRecordRaw } from 'vue-router'
import type { RouteStoreState, ServerRoute } from './types'

const useRouteStore = defineStore('route', {
  state: (): RouteStoreState => ({
    routes: defaultRouters,
    menu: []
  }),

  getters: {
    getRoutes(): RouteRecordRaw[] {
      console.log(this.routes)
      return this.routes
    },

    getMenu(): any {
      return this.menu
    }
  },

  actions: {
    processMenuData() {
      console.log(1)
    },
    generateRoutes(userData: any): RouteRecordRaw[] {
      // userData是服务端获取的用户数据
      console.log(userData)
      // TODO:
      // 服务端获取路由表, 动态引入
      // 组装路由数据 -> RouteRecordRaw
      const routes: ServerRoute = {
        id: '1',
        component: 'Layout',
        name: '首页',
        meta: {
          icon: null,
          title: '首页'
        },
        path: '/dashboard',
        parentId: '0',
        parentIds: '29494'
      }
      const records = formatServerRoutes([routes])
      this.generateMenu(records)
      return records
    },
    setMenu(menus: any) {
      this.menu = menus
    },
    generateMenu(routes: RouteRecordRaw[]) {
      this.setMenu(routes)
    }
  }
})

function formatServerRoutes(routes: ServerRoute[]) {
  console.log(routes)
  return routes as unknown as RouteRecordRaw[]
}

export default useRouteStore

export function routeStore() {
  return useRouteStore(store)
}
