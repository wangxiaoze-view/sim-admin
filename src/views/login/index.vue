<script lang="ts" setup>
  import loginForm from './components/loginForm.vue'
  import { imageLinks } from '~/src/config'
  const { login_bg, login_cover, logo } = imageLinks
</script>

<template>
  <div class="login" :style="{ backgroundImage: `url(${login_bg})` }">
    <div class="login-container">
      <img class="login-container--logo" :src="login_cover" alt="logion-cover" />
      <div class="login-container--content">
        <img class="logo" :src="logo" alt="login-logo" />
        <loginForm />
      </div>
    </div>
  </div>
</template>
