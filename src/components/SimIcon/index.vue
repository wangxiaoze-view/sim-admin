<script setup lang="ts">
  defineOptions({
    name: 'SimIcon',
  })

  withDefaults(
    defineProps<{
      iconClass?: string
      color?: string
      size?: number
    }>(),
    {
      iconClass: '',
      color: '#a8abb2',
      size: 20,
    }
  )
</script>

<template>
  <el-icon class="sim-icon" :size="size" style="outline: none">
    <i :class="iconClass" v-icon-color="color"></i>
  </el-icon>
</template>

<style scoped lang="scss">
  .sim-icon {
    cursor: pointer;
  }
</style>
