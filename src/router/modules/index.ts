import { homeRoutes } from './home'

export const getRoutes = (): Promise<ISimRouterRecordRaw[]> => {
  return new Promise((resolve) => {
    resolve([...homeRoutes])
  })
}
