import store from '../../index'
import type { UserState } from './types.d'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: { permission: ['1'], userName: 'Young' },
  }),

  getters: {
    getUserInfo(): any {
      return this.userInfo
    },
  },

  actions: {
    getInfo() {
      return this.userInfo
    },

    clearUserInfo() {
      this.userInfo = {}
    },
  },
})

export default useUserStore

export function userStore() {
  return useUserStore(store)
}
