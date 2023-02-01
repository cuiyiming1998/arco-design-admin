import { compile } from 'vue'
import defaultRouters from '@/router/defaultRouter'
import store from '../../index'
import { RouteRecordRaw } from 'vue-router'
import type { RouteStoreState, ServerRoute, Menu } from './types'
import { IconMenuFold } from '@arco-design/web-vue/es/icon'

const useRouteStore = defineStore('route', {
  state: (): RouteStoreState => ({
    routes: defaultRouters,
    menu: []
  }),

  getters: {
    getRoutes: (state): RouteRecordRaw[] => {
      return state.routes
    },
    getMenu: (state): any => {
      return state.menu
    }
  },

  actions: {
    setRoutes(routes: any) {
      this.routes = routes
    },

    setMenu(menus: Menu[]) {
      this.menu = menus
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
          name: '首页',
          meta: {
            icon: 'icon-menu-fold',
            title: '首页'
          },
          path: '/dashboard',
          parentId: '0',
          parentIds: '29494',
          children: [
            {
              id: '2',
              component: 'Home',
              name: '22222',
              meta: {
                icon: null,
                title: '首页'
              },
              path: '/dashboard',
              parentId: '0',
              parentIds: '29494'
            }
          ]
        },
        {
          id: '4',
          component: 'Layout',
          name: '单独的',
          meta: {
            icon: null,
            title: '首页'
          },
          path: '/dashboard',
          parentId: '0',
          parentIds: '29494'
        }
      ]
      const records = formatServerRoutes(routes)
      this.generateMenu(routes)
      this.setRoutes(records)
      return records
    },

    generateMenuItem(route: ServerRoute) {
      const item: Menu = this.getBaseMenu()
      item.id = route.id
      item.name = route.name
      if (route.meta.icon) {
        item.icon = h(compile(`<${route.meta.icon}/>`))
      }
      if (route.children?.length) {
        item.hasChildren = true
        route.children.map(r => {
          const i = this.generateMenuItem(r)
          item.children?.push(i)
        })
      }
      return item
    },

    getBaseMenu(): Menu {
      const menu: Menu = {
        id: '',
        name: '',
        type: '',
        icon: null,
        hasChildren: false,
        children: []
      }
      return menu
    },

    generateMenu(routes: ServerRoute[]) {
      if (routes.length) {
        const menus: Menu[] = []
        routes.map(route => {
          const item = this.generateMenuItem(route)
          menus.push(item)
        })
        this.setMenu(menus)
      }
    }
  }
})

function formatServerRoutes(routes: ServerRoute[]) {
  return routes as unknown as RouteRecordRaw[]
}

export default useRouteStore

export function routeStore() {
  return useRouteStore(store)
}
