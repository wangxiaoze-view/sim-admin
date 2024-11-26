import { inject, onUnmounted, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import SimProgress from '~/library/libs/nprogress'
import { useChangeTheme, useVisiteRoutes } from '~/src/hooks'
import { handlerActiveRoute } from '~/src/utils'
import { settings_config } from '~/src/config'

export default function useMainView() {
  const { keepaliveMax } = settings_config

  const route = useRoute()
  // 这个用于刷新页面, 也就是用 :key 强制刷新
  const routerKey = ref()

  const keepaliveNames = ref<Capitalize<string>[]>([])

  const $simEmitOn = inject<any>('$simEmitOn')
  const $simEmitOff = inject<any>('$simEmitOff')

  const { activeMenu, getVisitedRoutes } = useVisiteRoutes()
  const { getTheme } = useChangeTheme()

  const upKeepaliveNames = (refreshName?: string) => {
    keepaliveNames.value = getVisitedRoutes.value
      // fix: !i.meta.keepAlive && i.name !== route.name每次都会执行，这样的话之前的缓存数组就清空了
      .filter((i) => !i.meta.keepAlive && i.name !== refreshName)
      .map((item) => item.name)
  }

  watchEffect(() => {
    routerKey.value = handlerActiveRoute(route)
    upKeepaliveNames()
  })

  // 监听刷新
  $simEmitOn('refresh', () => {
    if (getTheme.value.isProgress) {
      SimProgress.start()
    }
    const cacheActivePath = routerKey.value
    routerKey.value = ''
    upKeepaliveNames(route.name as string)
    setTimeout(() => {
      routerKey.value = cacheActivePath
      upKeepaliveNames()
      if (getTheme.value.isProgress) {
        SimProgress.done()
      }
    })
  })

  onUnmounted(() => {
    $simEmitOff('refresh')
  })

  watch(
    route,
    () => {
      // 设置当前激活的菜单页面
      activeMenu.value = handlerActiveRoute(route)
    },
    { immediate: true }
  )

  return {
    getTheme,
    routerKey,
    keepaliveMax,
    keepaliveNames,
  }
}
