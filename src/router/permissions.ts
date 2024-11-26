import { Router } from 'vue-router'
import SimProgress from '~/library/libs/nprogress'
import { useRoutesStore } from '../stores/modules/routes'
import { resetLoginPath } from '../utils/routes'
import { settings_config } from '~/src/config'
import { getToken, logger } from '~/src/utils'
import { useChangeTheme, useUser, useTitle } from '../hooks'
const { whiteList, title, titleSpace, titleSort } = settings_config
export function setupPermissions(router: Router) {
  router.beforeEach(async (to, _, next) => {
    const { getTheme } = useChangeTheme()
    const { setUserInfo, logout } = useUser()
    const { setRoutes, getMenuRoutes } = useRoutesStore()
    if (getTheme.value.isProgress) SimProgress.start()
    const hasToken = getToken()

    if (hasToken) {
      // 禁止登录之后重复跳转登录
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        if (getMenuRoutes.length > 0) {
          next()
        } else {
          try {
            await setUserInfo()
            await setRoutes()
            next({ ...to, replace: true })
          } catch (error) {
            logger.error(JSON.stringify(error))
            logout()
            next(resetLoginPath(to.path))
          }
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next(resetLoginPath(to.fullPath))
      }
    }
  })

  router.afterEach((to) => {
    const metaTitle = to.meta.title
    if (metaTitle) {
      let titles = [metaTitle, title]
      if (titleSort) {
        titles = [title, metaTitle]
      }
      useTitle(titles.join(titleSpace))
    }
    if (SimProgress.status) SimProgress.done()
  })
}
