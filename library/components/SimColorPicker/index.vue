<script setup lang="ts">
  import { useColor } from '~/src/hooks'
  const { color, isColor, predefineColors, changeColor } = useColor()
</script>
<template>
  <el-color-picker
    v-if="isColor"
    v-model="color"
    :show-alpha="false"
    :predefine="predefineColors"
    @change="changeColor"
  />
</template>

<style scoped></style>
