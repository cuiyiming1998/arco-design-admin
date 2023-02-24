import { VNode } from 'vue'

export interface Menu {
  id: string
  name: string
  type: string
  icon: VNode | null
  hasChildren: boolean
  children: Menu[]
  path: string
}
