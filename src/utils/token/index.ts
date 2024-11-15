import { settings_config, cache_token } from '~/src/config'
import { Storage } from '~/src/utils'
const { tokenStorage } = settings_config

function getStorage() {
  Storage.storage = tokenStorage === 'localStorage' ? localStorage : sessionStorage
  return Storage
}

export function getToken() {
  return getStorage().get(cache_token) || ''
}

export function setToken(token: string) {
  return getStorage().set(cache_token, token)
}

export function removeToken() {
  return getStorage().remove(cache_token)
}
