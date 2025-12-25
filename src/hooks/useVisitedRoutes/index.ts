import { RouteLocationNormalizedLoaded } from 'vue-router'
import { useRoutesStore } from '~/src/stores/modules/routes'
import { useTabsStore } from '~/src/stores/modules/tabs'
import { handlerTabs } from '~/src/utils'

/**
 * 访问路由 Hook
 * 提供路由标签页管理功能
 * @returns 路由标签页相关方法和数据
 */
export function useVisitedRoutes() {
  const tabsStore = useTabsStore()
  const { setVisitedRoutes } = tabsStore
  const { getVisitedRoutes } = storeToRefs(tabsStore)

  const routesStore = useRoutesStore()
  const { getMenuRoutes } = routesStore
  const { activeMenu } = storeToRefs(routesStore)

  /** 当前标签页路径（响应式） */
  const currentTab = ref<string>('')

  /**
   * 添加访问路由到标签页
   * @param route 路由对象
   */
  const addVisitedRoutes = (route: RouteLocationNormalizedLoaded): void => {
    const tab = handlerTabs(route)
    if (!tab) return
    setVisitedRoutes(tab as RouteLocationNormalizedLoaded)
    currentTab.value = tab.path
  }

  /**
   * 初始化不可关闭的路由
   * 递归处理所有标记为 notClose 的路由
   * @param routes 路由列表，默认为菜单路由
   */
  const initNoCloseRoutes = (routes: ISimRouterRecordRaw[] = getMenuRoutes): void => {
    routes.forEach((item) => {
      if (item.meta?.notClose) {
        addVisitedRoutes(item as RouteLocationNormalizedLoaded)
      }
      if (item.children && item.children.length) {
        initNoCloseRoutes(item.children)
      }
    })
  }

  return {
    /** 当前标签页路径（响应式） */
    currentTab,
    /** 初始化不可关闭的路由 */
    initNoCloseRoutes,
    /** 已访问的路由列表（响应式） */
    getVisitedRoutes,
    /** 菜单路由列表 */
    getMenuRoutes,
    /** 当前激活的菜单（响应式） */
    activeMenu,
    /** 设置已访问的路由 */
    setVisitedRoutes,
    /** 添加访问路由 */
    addVisitedRoutes,
  }
}
