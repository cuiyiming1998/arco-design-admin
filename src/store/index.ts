import { createPinia } from 'pinia'
import useSettingsStore from './modules/app'

const pinia = createPinia()

export { useSettingsStore }
export default pinia
