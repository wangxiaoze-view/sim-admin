import { Router } from 'vue-router'
import SimProgress from '~/library/libs/nprogress'
import { useRoutesStore } from '../stores/modules/routes'
import { resetLoginPath } from '../utils/routes'
import { settings_config } from '~/src/config'
import { getToken, logger } from '~/src/utils'
import { useChangeTheme, useUser } from '../hooks'
const { whiteList } = settings_config
export function setupPermissions(router: Router) {
  router.beforeEach(async (to, _, next) => {
    const { getTheme } = useChangeTheme()
    const { setUserInfo, logout } = useUser()
    const { getMenuRoutes, setRoutes } = useRoutesStore()
    if (getTheme.value.isProgress) SimProgress.start()
    const hasToken = getToken()

    if (!hasToken) {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        // 不是白名单，要处理重定向地址, 会涉及多处地方引入的重定向，需拆分
        next(resetLoginPath(to.fullPath))
      }
    } else {
      if (getMenuRoutes.length > 0) {
        // 禁止重复跳转
        if (to.path === '/login') {
          next({ path: '/' })
        } else {
          next()
        }
      } else {
        try {
          await setUserInfo()
          await setRoutes()
          // const metaRole = (to.meta.roles ?? []) as string[]
          // const isExit = getUserInfo.value.roles.some((i) => metaRole.includes(i))
          // next(!isExit ? { path: '/' } : { ...to, replace: true })
          next({ ...to, replace: true })
        } catch (error) {
          logger.error(JSON.stringify(error))
          logout()
          next(resetLoginPath(to.fullPath))
        }
      }
    }
  })

  router.afterEach(() => {
    if (SimProgress.status) SimProgress.done()
  })
}
