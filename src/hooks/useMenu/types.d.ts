import { VNode } from 'vue'

export interface Menu {
  id: string | number
  name: string
  type: string
  icon: VNode | null
  hasChildren: boolean
  children: Menu[]
}
