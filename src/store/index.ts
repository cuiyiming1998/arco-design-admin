import { createPinia } from 'pinia'
import type { App } from 'vue'
import useSettingsStore from './modules/app'
import useRouteStore from './modules/routes'
import useUserStore from './modules/user'

const pinia = createPinia()

export { useSettingsStore, useRouteStore, useUserStore }

export function setupStore(app: App) {
  app.use(pinia)
}

export default pinia
