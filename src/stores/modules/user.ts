import { defineStore } from 'pinia'
import { getUserInfoApi, loginApi } from '~/src/api/user'
import { cache } from '~/src/config'

import { getToken, setToken, getLocalStorage, removeToken } from '~/src/utils'

export const useUserStore = defineStore('user', {
  state: (): IUserType => ({
    token: getToken(),
    userInfo: { ...(getLocalStorage(cache.cache_userInfo) as IUserInfoType) },
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
      localStorage.setItem(cache.cache_userInfo, JSON.stringify(this.userInfo))
    },
    async logout() {
      removeToken()
      this.clearStore()
      window.location.reload()
    },

    clearStore() {
      this.$reset()
    },
  },
})
