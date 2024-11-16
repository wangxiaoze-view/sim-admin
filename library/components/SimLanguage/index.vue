<script setup lang="ts">
  import SimIcon from '~/library/components/SimIcon/index.vue'
  defineOptions({
    name: 'SimLanguage',
  })
  import { useChangeTheme } from '~/src/hooks'
  const { changeLanguage, getTheme } = useChangeTheme()
</script>
<template>
  <el-dropdown @command="changeLanguage" v-if="getTheme.isI18n">
    <SimIcon icon-class="ri-translate" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh">
          <SimIcon icon-class="ri-translate-2" :size="16" />
          中文
        </el-dropdown-item>
        <el-dropdown-item command="en">
          <SimIcon icon-class="ri-english-input" :size="16" />
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped></style>
