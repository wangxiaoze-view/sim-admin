import { reactive, ref } from 'vue'
import { translate } from '~/src/i18n'
import { uniqueId } from '~/src/utils'
import { useChangeTheme, useForm } from '../index'
import { useUserStore } from '~/src/stores/modules/user'

const defaultPsw = '123456'
const LOCK_RULEs = {
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule: any, value: any, callback: any) => {
        if (value !== defaultPsw) {
          return callback(new Error(translate(`请输入锁屏密码, 默认${defaultPsw}`)))
        }
        callback()
      },
    },
  ],
}

export function useLocked() {
  const { formRef, validate, rules } = useForm(LOCK_RULEs)
  const { setTheme } = useChangeTheme()

  const {
    getUserInfo: { avatar },
  } = useUserStore()

  const formModel = reactive({
    password: defaultPsw,
  })

  const randomImage = (fast = false) => {
    return `https://picsum.photos/${!fast ? innerWidth : 200}/${!fast ? innerHeight : 400}?random=${uniqueId()}`
  }

  const lockImage = ref(randomImage())
  const title = translate('屏幕已锁定，请输入密码解锁🔓')
  const unLockTitle = translate('解锁')
  const changeTitle = translate('切换壁纸')
  const tipTitle = translate('壁纸切换可能会很慢，请耐心等待....')

  const toUnlock = () => {
    validate((valid: boolean) => {
      if (!valid) return
      setTheme({ isLockedLayer: false })
    })
  }

  const changeImage = () => {
    lockImage.value = randomImage()
  }

  return {
    formModel,
    formRef,
    rules,
    lockImage,
    toUnlock,
    changeImage,
    avatar,
    title,
    unLockTitle,
    changeTitle,
    tipTitle,
    randomImage,
  }
}
