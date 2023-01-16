import { createI18n } from 'vue-i18n'
import en from './en-US'
import cn from './zh-CN'

const locale = localStorage.getItem('ada-locale') || 'zh-CN'

const i18n = createI18n({
  locale,
  fallbackLocale: 'zh-CN',
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn
  }
})

export default i18n
