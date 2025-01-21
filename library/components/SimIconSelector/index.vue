<script setup lang="ts">
  import { ref } from 'vue'
  import { useChangeTheme, useIcon } from '~/src/hooks'

  defineOptions({
    name: 'SimIconSelector',
  })

  const values = ref<string[]>([])
  const { icons } = useIcon(1, 10)

  const { getTheme } = useChangeTheme()

  const onGetTags = () => {
    return icons.value.filter((item) => values.value.includes(item.name as string))
  }
</script>

<template>
  <el-select v-model="values" multiple placeholder="请选择图标" style="width: 240px">
    <el-option v-for="item in icons" :key="item.name" :label="item.name" :value="item.name">
      <component :is="item" :size="16" />
    </el-option>
    <template #tag>
      <component
        :is="item"
        v-for="item in onGetTags()"
        :key="item"
        :size="16"
        :color="getTheme.mode === 'dark' ? '#dfdfdf' : 'var(--el-text-color-regular)'"
      />
    </template>
  </el-select>
</template>

<style scoped lang="scss"></style>
