import { VNode } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export interface RouteStoreState {
  routes: RouteRecordRaw[]
  menu: Menu[]
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

export interface Menu {
  id: string | number
  name: string
  type: string
  icon: VNode | null
  hasChildren: boolean
  children: Menu[]
}
