<script lang="ts" setup>
  import { useRoutesStore } from '~/src/stores/modules/routes'
  import SimLogo from '../SimLogo/index.vue'
  import SimMenu from '../SimMenu/index.vue'
  import { storeToRefs } from 'pinia'
  import { useChangeTheme } from '~/src/hooks'

  defineOptions({
    name: 'SimAside',
  })

  const { getMenuRoutes } = useRoutesStore()
  const { getActiveMenu } = storeToRefs(useRoutesStore())

  const { getTheme } = useChangeTheme()
</script>
<template>
  <el-aside class="sim-aside">
    <SimLogo />
    <el-scrollbar class="sim-scroll--bar">
      <el-menu
        class="sim-menu"
        :default-active="getActiveMenu"
        :collapse-transition="false"
        :collapse="getTheme.collapse"
        :unique-opened="false"
        mode="vertical"
        menu-trigger="click"
      >
        <sim-menu v-for="(item, index) in getMenuRoutes" :key="index + item.name" :item="item" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped lang="scss"></style>
