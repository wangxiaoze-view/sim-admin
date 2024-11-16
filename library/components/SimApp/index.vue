<script setup lang="ts">
  import { useConfigProvider } from '~/src/hooks'
  defineOptions({
    name: 'SimApp',
  })
  const { getElLocal, getTheme } = useConfigProvider()
</script>
<template>
  <el-config-provider
    :locale="getElLocal"
    :size="getTheme.size"
    :button="{ autoInsertSpace: getTheme.autoInsertSpace }"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<style scoped></style>
