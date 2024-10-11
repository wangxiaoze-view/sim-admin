function setKey(cacheKey: string, key: string = 'SIM', space: string = '_') {
  return `${key}${space}${cacheKey}`
}
// 存储token
export const cache_token = setKey('TOKEN')
// 存储主题
export const cache_theme = setKey('THEME')
// 存储用户信息
export const cache_userInfo = setKey('USER_INFO')
