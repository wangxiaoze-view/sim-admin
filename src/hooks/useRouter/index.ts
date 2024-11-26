import { useRoute as useVueRoute, useRouter as useVueRouter } from 'vue-router'
export function useRouter() {
  const route = useVueRoute()
  const router = useVueRouter()
  return {
    route,
    router,
    useVueRoute,
    useVueRouter,
  }
}
