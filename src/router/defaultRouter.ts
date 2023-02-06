import { RouteRecordRaw } from 'vue-router'
import { HomePage, NotFoundPage, Layout, LoginPage } from './routerComponents'
import { PagesPath, PagesName } from '@/enums/pages'

export const Base: RouteRecordRaw = {
  path: '/',
  name: 'Base',
  redirect: PagesPath.Home
}
export const Login: RouteRecordRaw = {
  path: PagesPath.Login,
  name: PagesName.Login,
  component: LoginPage,
  meta: {
    title: '登录'
  }
}

export const Home: RouteRecordRaw = {
  path: PagesPath.Home,
  name: 'HomeLayout',
  component: Layout,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: PagesPath.Home,
      name: PagesName.Home,
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

const defaultRouters: RouteRecordRaw[] = [Login, Base, Home, ErrorPage]
export default defaultRouters
