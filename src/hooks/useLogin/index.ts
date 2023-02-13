import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { getKey } from '@/utils/encrypt/encrypt'
import { PagesPath } from '@/enums/pages'
import { Message } from '@arco-design/web-vue'
import { useI18n } from 'vue-i18n'
import { LoginForm } from '@/pages/login/components/types.d'

export const useLogin = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const { t } = useI18n()

  const login = (form: LoginForm) => {
    const msg = t('login.success')
    Message.success(msg)
    const key = getKey()
    console.log({ key })
    router.push(PagesPath.Home)
  }

  const logout = () => {
    userStore.clearUserInfo()

    const msg = t('header.message.logout')
    Message.success(msg)
    router.replace(PagesPath.Login)
  }

  return {
    login,
    logout
  }
}
