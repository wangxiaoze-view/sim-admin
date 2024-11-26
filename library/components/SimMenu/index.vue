<script setup lang="ts">
  import { computed } from 'vue'
  import simSubmenu from './components/simSubmenu.vue'
  import simMenuItem from './components/simMenuItem.vue'

  defineOptions({
    name: 'SimMenu',
  })

  const { item } = defineProps<{
    item: ISimRouterRecordRaw
  }>()

  const getComponent = computed(() => {
    return item.children &&
      item.children.some((route) => {
        return route.meta && !route.meta.hidden
      })
      ? simSubmenu
      : simMenuItem
  })
</script>

<template>
  <component :is="getComponent" :itemOrMenu="item">
    <template v-if="item.children && item.children.length">
      <el-scrollbar :max-height="'auto'">
        <SimMenu v-for="route in item.children" :key="route.path" :item="route" />
      </el-scrollbar>
    </template>
  </component>
</template>
