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

<style scoped lang="scss">
  .login {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;

    &-container {
      width: 90%;
      height: 90%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &--logo {
        width: 50%;
      }

      &--content {
        width: 35%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .logo {
          width: 80%;
          height: 100px;
          object-fit: cover;
        }
      }
    }
  }
</style>
