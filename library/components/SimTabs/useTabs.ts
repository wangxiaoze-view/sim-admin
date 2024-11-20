import { TabsPaneContext } from 'element-plus'
import { translate } from '~/src/i18n'
import { ETabs } from '~/src/enum'
import { computed, ref, watch, watchEffect } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'
import { useChangeTheme, useMouse, useVisiteRoutes } from '~/src/hooks'
import { handlerActiveRoute } from '~/src/utils'
import { useTabsStore } from '~/src/stores/modules/tabs'

export default function useTabs() {
  const isContextMenu = ref(false)
  // 鼠标移动激活的tab
  const hoverActiveTab = ref('')
  // left, right 用于定位右键菜单
  const left = ref(0)
  const top = ref(0)
  const route = useRoute()
  const router = useRouter()
  const { x, y } = useMouse()
  const { getTheme } = useChangeTheme()
  const { curtrentTab, getVisitedRoutes, initNoCloseRoutes, addVisitedRoutes } = useVisiteRoutes()
  const {
    onRemoveLeftTabs,
    onRemoveCurrentTabs,
    onRemoveRightTabs,
    onRemoveOtherTabs,
    onRemoveAllTabs,
  } = useTabsStore()

  const commands = computed(() => {
    const currentRoute = getVisitedRoutes.value.find(
      (i) => i.path === (hoverActiveTab.value || route.path)
    )
    const isDisabled = currentRoute && currentRoute.meta.notClose
    return [
      {
        label: translate('关闭当前'),
        command: ETabs.CloseCurrent,
        classNames: 'ri-arrow-up-line',
      },
      {
        label: translate('关闭左侧'),
        command: ETabs.CloseLeft,
        classNames: 'ri-arrow-left-line',
      },
      {
        label: translate('关闭右侧'),
        command: ETabs.CloseRight,
        classNames: 'ri-arrow-right-line',
      },
      {
        label: translate('关闭其他'),
        command: ETabs.CloseOthers,
        classNames: 'ri-rest-time-line',
      },
      {
        label: translate('关闭全部'),
        command: ETabs.CloseAll,
        classNames: 'ri-close-line',
      },
    ].slice(isDisabled ? 1 : 0)
  })

  /**
   * 切换到最后一个选项卡。
   * @param {string} activeRoute 要删除的活动路由。
   */
  const onLastTab = (activeRoute: string) => {
    const lastRoute = getVisitedRoutes.value.filter((i) => i.path !== activeRoute).slice(-1)[0]
    router.push(lastRoute || '/')
  }

  /**
   * 通过导航到单击的选项卡的路线来处理选项卡单击事件。
   * 如果选项卡对应于当前活动路线，则阻止导航。
   *
   * @param {TabsPaneContext} tab -包含路线信息的选项卡上下文。
   */
  const onTabClick = (tab: TabsPaneContext) => {
    // 避免同个路由多次点击
    if (handlerActiveRoute(route) === tab.props.name) return
    router.push(tab.props.name as string)
  }

  /**
   * 处理选项卡删除事件。
   *
   * 如果当前活动路由是要删除的选项卡路由，则切换到最后一个选项卡。
   * @param {string} tab -要删除的选项卡路由。
   */
  const onTabRemove = (tab: string) => {
    const currentRoute = getVisitedRoutes.value.find((i) => i.path === tab)
    if (!currentRoute) return
    const activeRoute = handlerActiveRoute(currentRoute as RouteLocationNormalizedLoaded)
    if (activeRoute === tab) {
      onLastTab(activeRoute)
    }
    onRemoveCurrentTabs(tab)
  }

  /**
   * 显示右键菜单
   * @param {string} path - 当前右键的tab的path
   */
  const onShowTabMenu = (path: string) => {
    isContextMenu.value = true
    hoverActiveTab.value = path
    // fix: 不能直接在页面使用x,y, 这样鼠标移动同时也会移动；要的效果就是右键定位！
    left.value = x.value
    top.value = y.value
  }

  const onHideTabMenu = () => {
    isContextMenu.value = false
    hoverActiveTab.value = ''
  }

  /**
   * 检查当前路由是否存在于已经访问的路由列表中，如果没有，跳转到最后一个访问的路由。
   * @remarks
   * 该方法主要是解决在路由变化时，当前活动路由不在已经访问的路由列表中的情况。
   */
  const onHasActiveTab = () => {
    const exit = getVisitedRoutes.value.find((i) => i.path === handlerActiveRoute(route))
    if (!exit) onLastTab(handlerActiveRoute(route))
  }

  /**
   *  右键单击菜单的命令处理程序。
   *
   *  @param {string} command -要执行的命令。
   *  @remarks
   *  可用的命令有：
   *  -`close-current`：关闭当前选项卡。
   *  -`close-left`：关闭当前选项卡左侧的所有选项卡。
   *  -`close-right`：关闭当前选项卡右侧的所有选项卡。
   *  -`close-others`：关闭除当前选项卡之外的所有选项卡。
   *  -`close-all`：关闭所有选项卡。
   */
  const onCommand = (command: string) => {
    switch (command) {
      case 'close-current':
        // 关闭当前，hoverActiveTab.value存在就是鼠标移动到某一个tab上，没有的话就是最右侧的操作
        onTabRemove(hoverActiveTab.value || handlerActiveRoute(route))
        break
      case 'close-left':
        if (hoverActiveTab.value) {
          onRemoveLeftTabs(hoverActiveTab.value)
          onHasActiveTab()
        } else {
          onRemoveLeftTabs(handlerActiveRoute(route))
        }
        break
      case 'close-right':
        if (hoverActiveTab.value) {
          onRemoveRightTabs(hoverActiveTab.value)
          onHasActiveTab()
        } else {
          onRemoveRightTabs(handlerActiveRoute(route))
        }
        break
      case 'close-others':
        if (hoverActiveTab.value) {
          onRemoveOtherTabs(hoverActiveTab.value)
          onHasActiveTab()
        } else {
          onRemoveOtherTabs(handlerActiveRoute(route))
        }
        break
      case 'close-all':
        onRemoveAllTabs()
        onHasActiveTab()
        break
    }
  }

  watchEffect(() => {
    if (hoverActiveTab.value) {
      document.body.addEventListener('click', onHideTabMenu)
    } else {
      document.body.removeEventListener('click', onHideTabMenu)
    }
  })

  watch(
    () => route.fullPath,
    () => {
      initNoCloseRoutes()
      addVisitedRoutes(route)
    },
    {
      immediate: true,
    }
  )
  return {
    isContextMenu,
    commands,
    left,
    top,
    curtrentTab,
    getVisitedRoutes,
    getTheme,
    onTabClick,
    onTabRemove,
    onShowTabMenu,
    onCommand,
  }
}
