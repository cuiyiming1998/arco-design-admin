import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { encrypt, getKey } from '@/utils/encrypt/encrypt'
import { PagesPath } from '@/enums/pages'
import { login as loginApi } from '@/api/login'
import { Notification } from '@arco-design/web-vue'
import { useI18n } from 'vue-i18n'
import type { LoginForm } from '@/pages/login/components/types.d'

export const useLogin = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const { t } = useI18n()

  const login = async (form: LoginForm) => {
    const key = await getKey()
    const encryptedData = encrypt(form, key)

    // const token = await getToken(encryptedData)
    // console.log(token)

    const msg = t('login.success')
    Notification.success(msg)
    router.push(PagesPath.Home)
  }

  const logout = () => {
    userStore.clearUserInfo()

    const msg = t('header.message.logout')
    Notification.success(msg)
    router.replace(PagesPath.Login)
  }

  return {
    login,
    logout
  }
}

const getToken = async (encryptedData: string) => {
  const { data } = await loginApi({ encryptedData })

  return data
}
