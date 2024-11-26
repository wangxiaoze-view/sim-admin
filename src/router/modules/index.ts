export const getRoutes = (): Promise<ISimRouterRecordRaw[]> => {
  return new Promise((resolve) => {
    const routes = require.context('./', true, /\.ts$/)
    const _routes: ISimRouterRecordRaw[] = []
    routes
      .keys()
      .filter((key) => key !== './index.ts')
      .forEach((key) => {
        const route = (routes(key) as any).default
        if (route) _routes.push(...route)
      })

    resolve(_routes)
  })
}
