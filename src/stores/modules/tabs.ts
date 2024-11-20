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
    // 删除左侧菜单标签
    onRemoveLeftTabs(path: string) {
      const findIndex = this.visitedRoutes.findIndex((item) => item.path === path)
      this.visitedRoutes = this.visitedRoutes.filter(
        (route, index) => route.meta.notClose || index >= findIndex
      )
    },

    // 删除当前路由
    onRemoveCurrentTabs(path: string) {
      this.visitedRoutes = this.visitedRoutes.filter((route) => route.path !== path)
    },

    // 删除右侧菜单标签
    onRemoveRightTabs(path: string) {
      const findIndex = this.visitedRoutes.findIndex((route) => route.path === path)
      this.visitedRoutes = this.visitedRoutes.filter(
        (item, index) => item.meta.notClose || index <= findIndex
      )
    },

    // 删除其他菜单标签
    onRemoveOtherTabs(path: string) {
      this.visitedRoutes = this.visitedRoutes.filter(
        (route) => route.meta.notClose || route.path === path
      )
    },

    // 删除所有
    onRemoveAllTabs() {
      this.visitedRoutes = this.visitedRoutes.filter((route) => route.meta.notClose)
    },
  },
})
