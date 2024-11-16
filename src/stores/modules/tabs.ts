import { defineStore } from 'pinia'
import { RouteLocationNormalizedLoaded } from 'vue-router'

export const useTabsStore = defineStore('tabs', {
  state: (): ITabasType => ({
    //  getLocalStorage('visitedRoutes') ||
    visitedRoutes: [],
  }),
  getters: {
    getVisitedRoutes: (state) => state.visitedRoutes,
  },
  actions: {
    setVisitedRoutes(route: RouteLocationNormalizedLoaded) {
      const isExit = this.visitedRoutes.find((i) => i.path === route.path)
      if (!isExit) this.visitedRoutes.push(route as ISimRouterRecordRaw)
    },
  },
})
