<script lang="ts" setup>
  import { link } from '~/src/config'
  defineOptions({
    name: 'SimLogo',
  })
  const { logo } = link
</script>

<template>
  <div class="sim-aside--title">
    <img alt="" class="sim-logo" :src="logo" />
  </div>
</template>
