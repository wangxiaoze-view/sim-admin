import { storeToRefs } from 'pinia'
import { useErrorStore } from '~/src/stores/modules/errors'
// import { useSpeechRecognitionForSimple } from '~/src/hooks'

export function useError() {
  const { setErrors } = useErrorStore()
  const { getErrors } = storeToRefs(useErrorStore())

  // const { speak } = useSpeechRecognitionForSimple()
  // const errorTempData = ref<Record<string, any>>([])

  const setError = (error: Record<string, any>) => {
    setErrors(error)

    // TODO：到时候进行环境判断
    // if (!errorTempData.value.length) {
    //   errorTempData.value.push(error)
    //   speak({
    //     text: '您有新的bug, 请尽快修复',
    //     endCallback: () => {
    //       errorTempData.value.shift()
    //     },
    //   })
    // }
  }

  return {
    setError,
    getErrors,
  }
}
