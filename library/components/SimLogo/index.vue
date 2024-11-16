<script lang="ts" setup>
  import { imageLinks } from '~/src/config'
  const { logo } = imageLinks
  defineOptions({
    name: 'SimLogo',
  })

  withDefaults(
    defineProps<{
      isCollapse?: boolean
    }>(),
    {
      isCollapse: true,
    }
  )
</script>

<template>
  <div class="sim-aside--title">
    <img alt="" class="sim-logo" :src="logo" />
  </div>
</template>
