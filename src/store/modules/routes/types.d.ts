import { RouteRecordRaw } from 'vue-router'

export interface RouteStoreState {
  routes: RouteRecordRaw[]
  serverRoutes: ServerRoute[]
}

export interface ServerRoute {
  id: string
  component: string
  name: string
  children?: ServerRoute[]
  parentId: string
  parentIds: string
  path: string
  redirect?: string
  meta: {
    icon: Nullable<string>
    title: string
  }
}
