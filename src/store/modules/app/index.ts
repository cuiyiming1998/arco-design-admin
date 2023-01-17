import settings from '@/config/settings'
import type { ProjectSettings } from '@/config/settings'

const useSettingsStore = defineStore('settings', {
  state: (): ProjectSettings => ({ ...settings }),

  actions: {
    toggleTheme(isDark: boolean) {
      if (isDark) {
        this.theme = 'dark'
        document.documentElement.classList.add('dark')
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.documentElement.classList.remove('dark')
        document.body.removeAttribute('arco-theme')
      }
    }
  }
})

export default useSettingsStore
