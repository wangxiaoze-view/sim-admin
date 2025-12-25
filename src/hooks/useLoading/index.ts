import { settings } from '~/src/config'

const { loadingText } = settings
export function useLoading(load: boolean, text: string = loadingText) {
  const loading = ref(load)
  const loadingText = ref(text)
  const setLoading = (value: boolean) => {
    loading.value = value
  }
  return {
    loading,
    setLoading,
    loadingText,
  }
}
