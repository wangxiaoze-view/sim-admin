<script setup lang="ts">
  import TripartiteLogin from './tripartiteLogin.vue'
  import SimIcon from '~/src/components/SimIcon/index.vue'
  import useLogin from '../hooks/useLogin'

  defineOptions({
    name: 'LoginForm',
  })
  const { formModel, formRef, config, rules, loading, isDisabled, login, refreshCode } = useLogin()
</script>

<template>
  <el-form ref="formRef" class="sim-form" :model="formModel" :rules="rules">
    <el-form-item prop="userName">
      <el-input
        v-model.trim="formModel.userName"
        class="sim-form--input"
        placeholder="请输入用户名"
        type="text"
      >
        <template #prefix>
          <sim-icon icon-class="ri-user-4-line" />
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input
        v-model.trim="formModel.password"
        class="sim-form--input"
        placeholder="请输入密码"
        :type="config.isPassword ? 'password' : 'text'"
      >
        <template #prefix>
          <sim-icon icon-class="ri-lock-line" />
        </template>
        <template #suffix>
          <sim-icon
            :icon-class="config.isPassword ? 'ri-eye-close-line' : 'ri-eye-line'"
            @click="config.isPassword = !config.isPassword"
          />
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="code">
      <div class="sim-code--row">
        <el-input
          v-model.trim="formModel.code"
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
        <img alt="Code" class="code-image" :src="config.codeImage" @click="refreshCode" />
      </div>
    </el-form-item>

    <el-form-item class="sim-form--tools">
      <el-button type="primary" class="sim-form--a" link>注册</el-button>
      <el-button type="primary" class="sim-form--a" link>忘记密码</el-button>
    </el-form-item>

    <el-button
      class="sim-form--submit"
      :disabled="isDisabled"
      :loading="loading"
      type="primary"
      @click="login"
    >
      登录
    </el-button>

    <div class="sim-divider">
      <span class="line"></span>
      <span class="title">第三方登录</span>
      <span class="line"></span>
    </div>

    <div class="svg-container">
      <tripartite-login />
    </div>
  </el-form>
</template>

<style lang="scss" scoped>
  :deep(.el-form-item__content) {
    justify-content: space-between;
  }
</style>
