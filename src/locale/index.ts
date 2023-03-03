import { createI18n } from 'vue-i18n'
import en from './en-US'
import cn from './zh-CN'
import { Locale } from '@/enums/locale'

const locale = localStorage.getItem('ada-locale') || Locale.ZH_CN

const i18n = createI18n({
  locale,
  legacy: false,
  fallbackLocale: 'zh-CN',
  allowComposition: true,
  messages: {
    'en-US': en,
    'zh-CN': cn,
  },
})

export default i18n
