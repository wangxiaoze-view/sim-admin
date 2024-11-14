import { http } from '~/src/utils'
export function getTest() {
  return http.get('/api/test', {
    params: {},
  })
}
