import { RouteRecordRaw } from 'vue-router'
import { HomePage, NotFoundPage, Layout } from './routerComponents'

export const Base: RouteRecordRaw = {
  path: '/',
  name: 'Base',
  redirect: '/home'
}

export const Home: RouteRecordRaw = {
  path: '/home',
  name: 'HomeLayout',
  component: Layout,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: 'HomePage'
      }
    }
  ]
}

export const ErrorPage: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFoundPageLayout',
  component: Layout,
  meta: {
    title: 'NotFoundPageLayout',
    hideBreadcrumb: true
  },
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: NotFoundPage,
      meta: {
        title: 'NotFoundPage'
      }
    }
  ]
}

const defaultRouters: RouteRecordRaw[] = [Base, Home, ErrorPage]
export default defaultRouters
