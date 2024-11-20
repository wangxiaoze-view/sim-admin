<script setup lang="ts">
  defineOptions({
    name: 'SimIcon',
  })

  const {
    iconClass,
    color = '#333',
    size = 16,
  } = defineProps<{
    iconClass?: string
    color?: string
    size?: number
  }>()
</script>

<template>
  <el-icon class="sim-icon" :size="size" style="outline: none">
    <i :class="iconClass" v-icon-color="color"></i>
  </el-icon>
</template>

<style scoped lang="scss">
  .sim-icon {
    cursor: pointer;
    padding-right: 3px;
    transition: all 0.3s;
  }
</style>
