<script setup lang="ts">
  import { useConfigProvider, useNetwork } from '~/src/hooks'
  import { useRouter } from 'vue-router'
  defineOptions({
    name: 'SimApp',
  })

  const router = useRouter()
  const { getElLocal, getTheme } = useConfigProvider()
  const { isOnline } = useNetwork()

  if (!isOnline.value) {
    router.push({ path: '/netOffline' })
  }
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
