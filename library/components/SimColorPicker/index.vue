<script setup lang="ts">
  import { useColor } from '~/src/hooks'
  defineOptions({
    name: 'SimColorPicker',
  })
  const { getTheme, predefineColors, changeColor } = useColor()
</script>
<template>
  <el-color-picker
    v-if="getTheme.isColor"
    v-model="getTheme.themeColor"
    :show-alpha="false"
    :predefine="predefineColors"
    @change="changeColor"
  />
</template>

<style scoped></style>
