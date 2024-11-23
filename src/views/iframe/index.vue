<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  defineOptions({
    name: 'LinkKnowledge',
  })

  const route = useRoute()

  const pathUrl = computed((): string => {
    return route.meta ? (route.meta.iframePath as string) : ''
  })
</script>

<template>
  <el-card shadow="hover" class="mb-20">
    <iframe :src="pathUrl" frameborder="0" width="100%" height="100%" scrolling="auto" />
  </el-card>
</template>

<style lang="scss" scoped>
  iframe {
    border-radius: 4px;
    height: calc(100vh - 221px);
  }
</style>
