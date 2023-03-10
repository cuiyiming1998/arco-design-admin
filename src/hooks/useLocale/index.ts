import { useI18n } from 'vue-i18n'
import { Message } from '@arco-design/web-vue'
import type { LocaleOption } from './types.d'
import { Locale } from '@/enums/locale'

export const useLocale = () => {
  const i18n = useI18n()
  const locale = computed(() => i18n.locale.value)

  const change = (l: string) => {
    if (i18n.locale.value === l) {
      // 如果当前locale和选择的相同的话 那么就不需要change了
      return
    }
    i18n.locale.value = l
    localStorage.setItem('ada-locale', l)
    Message.success(i18n.t('header.locale.success'))
  }
  const localeOptions: LocaleOption[] = [
    {
      id: 0,
      value: Locale.ZH_CN,
      label: '简体中文',
    },
    {
      id: 1,
      value: Locale.EN_US,
      label: 'English',
    },
  ]

  return {
    locale,
    change,
    localeOptions,
  }
}
