import { settings, cache } from '~/src/config'
const { tokenStorage } = settings

/**
 * 获取存储实例
 * 根据配置返回 localStorage 或 sessionStorage
 * @returns Storage 实例
 */
function getStorage() {
  return tokenStorage === 'localStorage' ? localStorage : sessionStorage
}

/**
 * 获取 token
 * @returns token 字符串，如果不存在则返回空字符串
 */
export function getToken(): string {
  return getStorage().getItem(cache.cache_token) || ''
}

/**
 * 设置 token
 * @param token token 字符串
 */
export function setToken(token: string): void {
  getStorage().setItem(cache.cache_token, token)
}

/**
 * 移除 token
 */
export function removeToken(): void {
  getStorage().removeItem(cache.cache_token)
}
