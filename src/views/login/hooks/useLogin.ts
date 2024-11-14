import { computed, onMounted, reactive, ref } from 'vue'
import { useLoading, useForm } from '~/src/hooks'
import { useUserStore } from '~/src/stores/modules/user'
import { randomCodeToCanvas } from '~/src/utils'
import { useRouter } from 'vue-router'

const FORM_RULES = {
  userName: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(Error('请输入用户名'))
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
          return callback(new Error('请输入密码'))
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
          return callback(Error('请输入验证码'))
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

  const { loading, setLoading } = useLoading(false)
  const { formRef, validate, rules } = useForm(FORM_RULES)

  const { toLogin } = useUserStore()

  const router = useRouter()

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
        console.log(loading.value)
        toLogin(formModel.userName, formModel.password)
      } finally {
        router.push('/')
        setLoading(false)
      }
    })
  }

  onMounted(refreshCode)

  return {
    loading,
    formRef,
    rules,
    validate,
    formModel,
    config,
    isDisabled,
    refreshCode,
    login,
  }
}
