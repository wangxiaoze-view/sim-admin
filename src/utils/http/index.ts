import { Request } from '../index'

export const http = new Request({
  baseURL: '/',
})

http.interceptorsRequest((config) => {
  return config
})

http.interceptorsResponse((response) => {
  return response
})
