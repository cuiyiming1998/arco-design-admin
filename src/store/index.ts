import { createPinia } from 'pinia'
import useSettingsStore from './modules/app'
import useRouteStore from './modules/routes'
import useUserStore from './modules/user'

const pinia = createPinia()

export { useSettingsStore, useRouteStore, useUserStore }
export default pinia
