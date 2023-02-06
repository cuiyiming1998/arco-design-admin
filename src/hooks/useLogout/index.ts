import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { PagesPath } from '@/enums/pages'
import { Message } from '@arco-design/web-vue'
import { useI18n } from 'vue-i18n'

export const useLogout = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const { t } = useI18n()

  const logout = () => {
    userStore.clearUserInfo()

    const msg = t('header.message.logout')
    Message.success(msg)
    router.replace(PagesPath.Login)
  }

  return {
    logout
  }
}
