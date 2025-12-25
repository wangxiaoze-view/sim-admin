/**
 * 获取所有路由模块
 * 动态加载 modules 目录下的所有路由配置文件
 * @returns 路由配置数组的 Promise
 */
export const getRoutes = (): Promise<ISimRouterRecordRaw[]> => {
  return new Promise((resolve) => {
    const routes = require.context('./', true, /\.ts$/)
    const allRoutes: ISimRouterRecordRaw[] = []

    routes
      .keys()
      .filter((key) => key !== './index.ts')
      .forEach((key) => {
        const module = routes(key) as { default?: ISimRouterRecordRaw[] }
        if (module.default && Array.isArray(module.default)) {
          allRoutes.push(...module.default)
        }
      })

    resolve(allRoutes)
  })
}
