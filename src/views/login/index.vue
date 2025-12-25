<script lang="ts" setup>
  import SimLanguage from '~/library/components/SimLanguage/index.vue'
  import SimColorPicker from '~/library/components/SimColorPicker/index.vue'
  import SimSwitchDark from '~/library/components/SimSwitchDark/index.vue'
  import loginForm from './components/loginForm.vue'
  defineOptions({
    name: 'LoginIndex',
  })
  import { link } from '~/src/config'
  const { login_bg, login_cover, logo } = link
</script>

<template>
  <div class="login">
    <img class="login-cover" :src="login_bg" alt="" />
    <el-space wrap class="login-tools" :size="20">
      <SimSwitchDark />
      <SimColorPicker />
      <SimLanguage />
    </el-space>

    <div class="login-container">
      <img class="login-container--logo" :src="login_cover" alt="logion-cover" />
      <div class="login-container--content">
        <img class="logo" :src="logo" alt="login-logo" />
        <loginForm />
      </div>
    </div>
  </div>
</template>
