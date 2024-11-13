import { defineStore } from 'pinia'

import { getToken } from '~/src/utils'

export const useUserStore = defineStore('user', {
  state: (): IUserType => ({
    token: getToken(),
  }),
  getters: {
    getToken: (state) => state.token,
  },
})
