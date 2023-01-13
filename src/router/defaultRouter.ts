import { RouteRecordRaw } from 'vue-router'

export const Base: RouteRecordRaw = {
  path: '/',
  name: 'Base',
  redirect: '/home'
}

export const Home: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/pages/home/index.vue'),
  meta: {
    title: '首页'
  }
}

export const ErrorPage: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'ErrorPage',
  component: () => import('@/pages/404/index.vue'),
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true
  }
}

const defaultRouters: RouteRecordRaw[] = [Base, Home, ErrorPage]
export default defaultRouters
