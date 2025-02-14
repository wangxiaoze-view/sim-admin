<template>
  <div class="remote-container mb-20">
    <el-alert title="后期会继续完善远程组件!" class="mb-20"></el-alert>
    <Btn />
  </div>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, h } from 'vue'
  defineOptions({ name: 'RemotePage' })
  const Btn = defineAsyncComponent({
    loader: () => import('remote/button'),
    loadingComponent: () => h('div', 'loading...'),
    errorComponent: () => h('div', '远程组件加载失败, 请刷新页面!'),
    delay: 1000,
  })
</script>

<style scoped lang="scss"></style>
