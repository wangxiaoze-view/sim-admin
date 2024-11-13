import { Router } from 'vue-router'
import SimProgress from '~/library/libs/nprogress'
import { useSettinggsStore } from '../stores/modules/settings'
import { useUserStore } from '../stores/modules/user'
import { useRoutesStore } from '../stores/modules/routes'
import { resetLoginPath } from '../utils/routes'
import { settings_config } from '~/src/config'
const { whiteList } = settings_config
export function setupPermissions(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const {
      getTheme: { isProgress },
    } = useSettinggsStore()

    const { getToken } = useUserStore()

    const { getMenuRoutes, setRoutes } = useRoutesStore()

    if (isProgress) SimProgress.start()

    const hasToken = getToken

    if (!hasToken) {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        // 不是白名单，要处理重定向地址, 会涉及多处地方引入的重定向，需拆分
        next(resetLoginPath(to.fullPath))
      }
    } else {
      // 这里加一层的原因：避免后期走接口调用
      if (getMenuRoutes.length === 0) {
        await setRoutes()
      } else {
        if (to.path === '/login') {
          next({ path: '/' })
        } else {
          next()
        }
      }
    }
  })

  router.afterEach((to, from) => {
    if (SimProgress.status) SimProgress.done()
  })
}
