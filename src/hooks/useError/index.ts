import { useErrorStore } from '~/src/stores/modules/errors'

/**
 * 错误处理 Hook
 * 提供错误记录和获取功能
 * @returns 错误处理方法集合
 */
export function useError() {
  const errorStore = useErrorStore()
  const { setErrors } = errorStore
  const { getErrors } = storeToRefs(errorStore)

  /**
   * 设置错误信息
   * @param error 错误对象
   */
  const setError = (error: Record<string, unknown>): void => {
    setErrors(error)

    // TODO: 后续可添加语音提示功能
    // const { speak } = useSpeechRecognitionForSimple()
    // const errorTempData = ref<Record<string, any>>([])
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
    /** 设置错误信息 */
    setError,
    /** 获取错误列表（响应式） */
    getErrors,
  }
}
