import store from '../../index'
import type { UserState } from './types.d'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: { permissions: ['1'], userName: 'Young' },
  }),

  getters: {
    getUserInfo(): any {
      return this.userInfo
    },
    getUserPermissions(): string[] {
      return this.state.userInfo.permissions
    },
  },

  actions: {
    async getInfo() {
      const fakeInfo: UserState['userInfo'] = {
        permissions: ['1'],
        userName: 'Young',
      }
      return new Promise((resolve) => {
        resolve(fakeInfo)
      })
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
