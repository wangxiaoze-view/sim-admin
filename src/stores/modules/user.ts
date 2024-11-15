import { defineStore } from 'pinia'
import { getUserInfoApi, loginApi } from '~/src/api/user'
import { cache_userInfo } from '~/src/config'

import { getToken, setToken, getLocalStorage, Storage } from '~/src/utils'

export const useUserStore = defineStore('user', {
  state: (): IUserType => ({
    token: getToken(),
    userInfo: { ...(getLocalStorage(cache_userInfo) || {}) },
  }),
  getters: {
    getToken: (state) => state.token,
    getUserInfo: (state) => state.userInfo,
  },
  actions: {
    async toLogin(username: string, password: string) {
      const { success = false, context } = await loginApi({ username, password })
      if (!success) return
      setToken(context.token)
      return Promise.resolve(success)
    },

    async setUserInfo() {
      if (Object.keys(this.userInfo).length > 0) return
      const { success = false, context } = await getUserInfoApi()
      if (!success) return
      this.userInfo = context
      Storage.set(cache_userInfo, this.userInfo)
    },
  },
})
