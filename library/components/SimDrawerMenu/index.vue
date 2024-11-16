<template>
  <el-drawer
    v-model="getTheme.collapse"
    direction="ltr"
    :size="220"
    :with-header="false"
    @close="setCollapse"
  >
    <sim-aside class="sim-aside--drawer" :collapse="false" />
  </el-drawer>
</template>

<script lang="ts" setup>
  import { useChangeTheme } from '~/src/hooks'
  import SimAside from '../SimAside/index.vue'

  defineOptions({
    name: 'SimDrawerMenu',
  })

  const { getTheme, setTheme } = useChangeTheme()

  const setCollapse = () => {
    setTheme({ collapse: !getTheme.value.collapse })
  }
</script>

<style scoped></style>
