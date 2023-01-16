import { useI18n } from 'vue-i18n'
import { Message } from '@arco-design/web-vue'
import { Locale } from '@/enums/locale'
import { LocaleOption } from './types.d'

export const useLocale = () => {
  const i18n = useI18n()
  const locale = computed(() => i18n.locale.value)
  const change = (l: string) => {
    i18n.locale.value = l
    localStorage.setItem('ada-locale', l)
    Message.success(i18n.t('header.locale.success'))
  }
  const localeOptions: LocaleOption[] = [
    {
      id: 0,
      value: Locale.ZH_CN,
      label: '简体中文'
    },
    {
      id: 1,
      value: Locale.EN_US,
      label: 'English'
    }
  ]

  return {
    locale,
    change,
    localeOptions
  }
}
