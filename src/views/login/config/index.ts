import { isEmpty } from '~/src/utils'
export const FORM_RULES = {
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
        if (!isEmpty(value)) {
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
