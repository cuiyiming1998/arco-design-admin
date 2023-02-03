import { useRouteStore } from '@/store'
import { ServerRoute } from '@/store/modules/routes/types'
import { compile } from 'vue'
import { Menu } from './types.d'

const menuPrefix = 'sider.menu.'
const submenuPrefix = 'sider.submenu.'

function generateMenuItem(route: ServerRoute) {
  const item: Menu = getBaseMenu()
  const { id, meta, children } = route
  const { icon, title } = meta

  if (icon) {
    item.icon = h(compile(`<${icon}/>`))
  }

  if (children?.length) {
    item.hasChildren = true
    children.map(r => {
      const i = generateMenuItem(r)
      item.children?.push(i)
    })
  }

  item.id = id
  item.name = `${item.hasChildren ? submenuPrefix : menuPrefix}${title}`

  return item
}

function getBaseMenu(): Menu {
  const menu: Menu = {
    id: '',
    name: '',
    type: '',
    icon: null,
    hasChildren: false,
    children: []
  }
  return menu
}

function generateMenu(routes: ServerRoute[]) {
  const menus: Menu[] = []
  if (routes.length) {
    routes.map(route => {
      const item = generateMenuItem(route)
      menus.push(item)
    })
  }

  return menus
}

export const useMenu = () => {
  const rStore = useRouteStore()
  const serverRoutes = rStore.getServerRoutes
  const menuTree = computed(() => generateMenu(unref(serverRoutes)))

  return { menuTree }
}
