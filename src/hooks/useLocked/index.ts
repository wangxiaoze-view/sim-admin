import { translate } from '~/src/i18n'
import { useChangeTheme, useForm, useUser } from '../index'
import { uniqueId } from 'lodash-es'

const defaultPsw = '123456'

const LOCK_RULES = {
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: (_rule: unknown, value: string, callback: (error?: Error) => void) => {
        if (value !== defaultPsw) {
          return callback(new Error(translate(`请输入锁屏密码, 默认${defaultPsw}`)))
        }
        callback()
      },
    },
  ],
}

/**
 * 锁屏 Hook
 * 提供锁屏、解锁、切换壁纸等功能
 * @returns 锁屏相关方法和数据
 */
export function useLocked() {
  const { formRef, validate, rules } = useForm(LOCK_RULES)
  const { setTheme } = useChangeTheme()
  const { getUserInfo } = useUser()

  const formModel = reactive({
    password: defaultPsw,
  })

  /**
   * 生成随机壁纸 URL
   * @param fast 是否使用快速模式（小尺寸），默认为 false
   * @returns 壁纸 URL
   */
  const randomImage = (fast = false): string => {
    const width = fast ? 200 : innerWidth
    const height = fast ? 400 : innerHeight
    return `https://picsum.photos/${width}/${height}?random=${uniqueId()}`
  }

  const lockImage = ref(randomImage())
  const title = translate('屏幕已锁定，请输入密码解锁🔓')
  const unLockTitle = translate('解锁')
  const changeTitle = translate('切换壁纸')
  const tipTitle = translate('壁纸切换可能会很慢，请耐心等待....')

  /**
   * 解锁屏幕
   */
  const toUnlock = (): void => {
    validate((valid: boolean) => {
      if (!valid) return
      setTheme({ isLockedLayer: false })
    })
  }

  /**
   * 切换壁纸
   */
  const changeImage = (): void => {
    lockImage.value = randomImage()
  }

  return {
    formModel,
    formRef,
    rules,
    lockImage,
    toUnlock,
    changeImage,
    getUserInfo,
    title,
    unLockTitle,
    changeTitle,
    tipTitle,
    randomImage,
  }
}
