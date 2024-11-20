import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { useRoutesStore } from '~/src/stores/modules/routes'
import { useTabsStore } from '~/src/stores/modules/tabs'
import { handlerTabs } from '~/src/utils'

export function useVisiteRoutes() {
  const { setVisitedRoutes } = useTabsStore()
  const { getVisitedRoutes } = storeToRefs(useTabsStore())

  const { getMenuRoutes } = useRoutesStore()

  const { activeMenu } = storeToRefs(useRoutesStore())

  const curtrentTab = ref<string>('')

  const addVisitedRoutes = (route: RouteLocationNormalizedLoaded) => {
    const tab = handlerTabs(route)
    if (!tab) return
    setVisitedRoutes(tab as RouteLocationNormalizedLoaded)
    curtrentTab.value = tab.path
  }

  const initNoCloseRoutes = (routes: ISimRouterRecordRaw[] = getMenuRoutes) => {
    routes.forEach((item) => {
      if (item.meta?.notClose) addVisitedRoutes(item as RouteLocationNormalizedLoaded)
      if (item.children && item.children.length) initNoCloseRoutes(item.children)
    })
  }

  return {
    curtrentTab,
    initNoCloseRoutes,
    getVisitedRoutes,
    getMenuRoutes,
    activeMenu,
    setVisitedRoutes,
    addVisitedRoutes,
  }
}
