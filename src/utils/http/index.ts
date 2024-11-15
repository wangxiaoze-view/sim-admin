import { getToken, Request } from '../index'

export const http = new Request({
  baseURL: '/',
})

http.interceptorsRequest((config) => {
  const token = getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptorsResponse((response) => {
  return response
})
