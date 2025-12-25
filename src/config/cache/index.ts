/**
 * @description: 设置缓存键参数
 * @returns {ISetKeyParams}
 */
interface ISetKeyParams {
  cacheKey: ECacheKey
  key?: string
  space?: string
}

/**
 * @description: 缓存键
 * @returns {string}
 */
enum ECacheKey {
  TOKEN = 'TOKEN',
  THEME = 'THEME',
  USER_INFO = 'USER_INFO',
}

/**
 * @description: 设置缓存键
 * @param {ISetKeyParams} params
 * @returns {string}
 */
const setKey = ({ cacheKey, key = 'SIM', space = '_' }: ISetKeyParams): string =>
  `${key}${space}${cacheKey}`

export default {
  // 存储token
  cache_token: setKey({ cacheKey: ECacheKey.TOKEN }),
  // 存储主题
  cache_theme: setKey({ cacheKey: ECacheKey.THEME }),
  // 存储用户信息
  cache_userInfo: setKey({ cacheKey: ECacheKey.USER_INFO }),
}
