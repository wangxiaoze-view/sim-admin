import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
import { useLoading, useForm, useUser } from '~/src/hooks'
import { randomCodeToCanvas } from '~/src/utils'
import { useRoute, useRouter } from 'vue-router'
import { translate } from '~/src/i18n'

const FORM_RULES = {
  userName: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(Error(translate('请输入用户名')))
        }
        callback()
      },
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(new Error(translate('请输入密码')))
        }
        callback()
      },
    },
  ],
  code: [
    {
      require: true,
      trigger: 'blur',
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(Error(translate('请输入验证码')))
        }
        callback()
      },
    },
  ],
}

export default function useLogin() {
  const formModel = reactive({
    userName: 'admin',
    password: 'admin',
    code: '',
  })

  const config = reactive({
    codeImage: '',
    isPassword: true,
    passwordType: 'password',
  })

  const router = useRouter()
  const route = useRoute()
  const { loading, setLoading } = useLoading(false)
  const { formRef, validate, rules } = useForm(FORM_RULES)
  const { toLogin } = useUser()

  const redirect = ref('')

  const isDisabled = computed(() => {
    return !formModel.userName || !formModel.password
  })

  const refreshCode = () => {
    const { url, code } = randomCodeToCanvas.randomCode()
    config.codeImage = url
    formModel.code = code
  }

  const login = async () => {
    validate((valid: boolean) => {
      if (!valid) return
      try {
        setLoading(true)
        toLogin(formModel.userName, formModel.password).then((isSuccess) => {
          if (isSuccess) router.push({ path: redirect.value ?? '/' })
          // fix: 登录成功之后，加载动画不消失， 一个好处就是在跳转页面之前由于加载文件可能会有短暂的可点状态
          // setLoading(false)
        })
      } catch (error) {
        console.error(JSON.stringify(error))
        setLoading(false)
      }
    })
  }

  onMounted(refreshCode)

  watchEffect(() => {
    const _redirect = route.query ? (route.query.redirect as string) : '/'
    redirect.value = ['/403', '/404'].includes(_redirect) ? '/' : _redirect
  })

  return {
    loading,
    formRef,
    rules,
    validate,
    formModel,
    config,
    isDisabled,
    translate,
    refreshCode,
    login,
  }
}
