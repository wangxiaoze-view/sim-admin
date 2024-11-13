import { settings_config, cache_token } from '~/src/config'
const { tokenStorage } = settings_config

const Storage = tokenStorage === 'localStorage' ? localStorage : sessionStorage

export function getToken() {
  return Storage.getItem(cache_token) ?? ''
}

export function setToken(token: string) {
  return Storage.setItem(cache_token, token)
}

export function removeToken() {
  return Storage.removeItem(cache_token)
}
