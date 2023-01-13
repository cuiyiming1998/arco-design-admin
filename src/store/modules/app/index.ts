import settings from '@/config/settings'

const useSettingsStore = defineStore('settings', {
  state: () => ({ ...settings }),

  actions: {
    toggleTheme(isDark: boolean) {
      if (isDark) {
        this.theme = 'dark'
        document.documentElement.classList.add('dark')
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.body.removeAttribute('arco-theme')
      }
    }
  }
})

export default useSettingsStore
