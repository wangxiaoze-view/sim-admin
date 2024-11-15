<script setup lang="ts">
  import { useConfigProvider } from '~/src/hooks'
  defineOptions({
    name: 'SimApp',
  })
  const { getElLocal, size, button } = useConfigProvider()
</script>
<template>
  <el-config-provider :locale="getElLocal" :size="size" :button="button">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<style scoped></style>
