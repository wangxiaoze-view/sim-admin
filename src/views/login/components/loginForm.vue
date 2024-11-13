<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useLoading } from '~/src/hooks'
  import { reactive, computed, ref, nextTick } from 'vue'
  import { FORM_RULES } from '../config/index'
  import { randomCodeToCanvas as verificationCode } from '~/src/utils'
  import TripartiteLogin from './tripartiteLogin.vue'
  import SimFormErrorMsg from '~/src/components/SimFormErrorMsg/index.vue'
  import SimIcon from '~/src/components/SimIcon/index.vue'
  import { useUserStore } from '~/src/stores/modules/user'

  defineOptions({
    name: 'LoginForm',
  })

  const userStore = useUserStore()
  const router = useRouter()
  const formRef = ref()
  const { loading, setLoading } = useLoading(false)

  const state = reactive({
    formModel: {
      userName: 'admin',
      password: 'admin',
      code: '',
    },
    codeImage: '',
    FORM_RULES,
    isPassword: true,
    passwordType: 'password',

    isDisabled: computed((): boolean => {
      return !state.formModel.userName || !state.formModel.password
    }),
  })

  const refreshCode = () => {
    const { url, code } = verificationCode.randomCode()
    state.codeImage = url
    state.formModel.code = code
  }

  const handleLogin = async (formRef: any) => {
    if (!formRef) return
    await formRef.validate(async (valid: boolean) => {
      if (!valid) return

      try {
        setLoading(true)
        // userStore.setLogin(state.formModel.userName, state.formModel.password).then(() => {
        //   router.push('/')
        // })
      } finally {
        setTimeout(() => setLoading(false), 2000)
      }
    })
  }

  nextTick(() => {
    refreshCode()
  })
</script>

<template>
  <el-form ref="formRef" class="sim-form" :model="state.formModel" :rules="FORM_RULES">
    <el-form-item prop="userName">
      <el-input
        v-model.trim="state.formModel.userName"
        class="sim-form--input"
        placeholder="请输入用户名"
        type="text"
      >
        <template #prefix>
          <sim-icon icon-class="ri-user-4-line" />
        </template>
      </el-input>
      <template #error="{ error }">
        <sim-form-error-msg :title="error" />
      </template>
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        v-model.trim="state.formModel.password"
        class="sim-form--input"
        placeholder="请输入密码"
        :type="state.isPassword ? 'password' : 'text'"
      >
        <template #prefix>
          <sim-icon icon-class="ri-lock-line" />
        </template>
        <template #suffix>
          <sim-icon
            :icon-class="state.isPassword ? 'ri-eye-close-line' : 'ri-eye-line'"
            @click="state.isPassword = !state.isPassword"
          />
        </template>
      </el-input>
      <template #error="{ error }">
        <sim-form-error-msg :title="error" />
      </template>
    </el-form-item>

    <el-form-item prop="code">
      <div class="sim-code--row">
        <el-input
          v-model.trim="state.formModel.code"
          class="sim-form--input"
          :disabled="true"
          placeholder="请输入验证码"
          type="text"
        >
          <template #prefix>
            <sim-icon icon-class="ri-safe-line" />
          </template>
        </el-input>
        <canvas id="sim-code" class="code-image"></canvas>
        <img alt="Code" class="code-image" :src="state.codeImage" @click="refreshCode" />
      </div>

      <template #error="{ error }">
        <sim-form-error-msg :title="error" />
      </template>
    </el-form-item>

    <el-form-item class="sim-form--tools">
      <router-link class="sim-form--a" to="#">
        <div>注册</div>
      </router-link>
      <router-link class="sim-form--a" to="#">
        <div>忘记密码</div>
      </router-link>
    </el-form-item>

    <el-button
      class="sim-form--submit"
      :disabled="state.isDisabled"
      :loading="loading"
      type="primary"
      @click="handleLogin(formRef)"
    >
      登录
    </el-button>

    <div class="sim-divider">
      <span class="line"></span>
      <span class="title">第三方登录</span>
      <span class="line"></span>
    </div>

    <el-form-item class="svg-container">
      <tripartite-login />
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
  @import '../css/login.scss';
</style>
