import { defineStore } from 'pinia'

import { themeConfig as defaultTheme } from '~/src/config'
import { asyncRoutes } from '~/src/router'

const theme = { ...defaultTheme }

export const useRoutesStore = defineStore('routes', {
  state: (): IRoutesType => ({
    menuRoutes: [],
    allRoutes: [],
  }),
  getters: {
    getMenuRoutes: (state) => state.menuRoutes,
    getAllRoutes: (state) => state.allRoutes,
  },
  actions: {
    async setRoutes() {
      // 设置路由，权限，菜单
      const routes = [...asyncRoutes]
      console.log(routes, 213)
    },
  },
})
