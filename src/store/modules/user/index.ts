import store from '../../index'
import type { UserState } from './types.d'

const useUserStore = defineStore('useUserStore', {
  state: (): UserState => ({
    userInfo: {}
  }),

  getters: {
    getUserInfo(): any {
      return this.userInfo
    }
  },

  actions: {
    getInfo() {
      this.userInfo = { permission: ['1'] }
      return this.userInfo
    }
  }
})

export default useUserStore

export function userStore() {
  return useUserStore(store)
}
