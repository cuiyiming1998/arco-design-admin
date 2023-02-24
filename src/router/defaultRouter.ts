import { RouteRecordRaw } from 'vue-router'
import { Workplace, NotFoundPage, Layout, LoginPage } from './routerComponents'
import { PagesPath, PagesName } from '@/enums/pages'

export const Base: RouteRecordRaw = {
  path: '/',
  name: 'Base',
  redirect: PagesPath.Dashboard
}
export const Login: RouteRecordRaw = {
  path: PagesPath.Login,
  name: PagesName.Login,
  component: LoginPage,
  meta: {
    title: '登录'
  }
}

export const Dashboard: RouteRecordRaw = {
  path: PagesPath.Dashboard,
  name: 'HomeLayout',
  component: Layout,
  redirect: PagesPath.Workplace,
  meta: {
    title: 'Dashboard'
  },
  children: [
    {
      path: PagesPath.Workplace,
      name: PagesName.Workplace,
      component: Workplace,
      meta: {
        title: 'Workplace'
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

const defaultRouters: RouteRecordRaw[] = [Login, Base, Dashboard, ErrorPage]
export default defaultRouters
