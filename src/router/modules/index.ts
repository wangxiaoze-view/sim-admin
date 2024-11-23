import { homeRoutes } from './home'
import { permissionRoutes } from './permission'
import { functionRoutes } from './function'
import { pageRoutes } from './page'
import { linkRoutes } from './link'
import { componentRoutes } from './component'
import { cssRoutes } from './css'

export const getRoutes = (): Promise<ISimRouterRecordRaw[]> => {
  return new Promise((resolve) => {
    resolve([
      ...homeRoutes,
      ...permissionRoutes,
      ...functionRoutes,
      ...pageRoutes,
      ...linkRoutes,
      ...componentRoutes,
      ...cssRoutes,
    ])
  })
}
