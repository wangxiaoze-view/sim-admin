<script lang="ts" setup>
  import { imageLinks } from '~/src/config'
  defineOptions({
    name: 'SimLogo',
  })
  const { logo } = imageLinks
</script>

<template>
  <div class="sim-aside--title">
    <img alt="" class="sim-logo" :src="logo" />
  </div>
</template>
