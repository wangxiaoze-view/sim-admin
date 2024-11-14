import { defineStore } from 'pinia'
import { loginApi } from '~/src/api/user'
import { getToken, setToken } from '~/src/utils'

export const useUserStore = defineStore('user', {
  state: (): IUserType => ({
    token: getToken(),
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    async toLogin(username: string, password: string) {
      const { success = false, context } = await loginApi({ username, password })
      if (!success) return
      setToken(context.token)
    },
  },
})
