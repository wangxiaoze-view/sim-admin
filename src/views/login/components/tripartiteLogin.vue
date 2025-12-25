<script setup lang="ts">
  import { link } from '~/src/config'

  defineOptions({
    name: 'TripartiteLogin',
  })

  const SVG_ICONS = [link.wechat_icon, link.qq_icon]

  const toLogin = () => {
    // simNotice({
    //   title: '温馨提示',
    //   message: '该功能仅仅为演示，请以实际业务场景使用',
    //   type: 'error'
    // })
  }
</script>
<template>
  <img
    v-for="(item, index) in SVG_ICONS"
    :key="index"
    alt=""
    class="login-image"
    :src="item"
    @click="toLogin"
  />
</template>

<style scoped></style>
