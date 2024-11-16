<script setup lang="ts">
  import { computed } from 'vue'
  import { useChangeTheme, useResizeMobile } from '~/src/hooks'
  defineOptions({
    name: 'LayoutIndex',
  })

  const { getTheme } = useChangeTheme()
  const getComponent = computed(() => {
    return `sim-layout-${getTheme.value.layout}`
  })
  useResizeMobile()
</script>

<template>
  <component
    :is="getComponent"
    :class="{
      'is-mobile': getTheme.device === 'mobile',
      'is-collapse': getTheme.collapse,
      'is-tabs': getTheme.isTabs,
      'is-fixed-header': getTheme.isFixedHeader,
      'sim-mode-default': getTheme.menuMode === 'default',
      'sim-mode-line': getTheme.menuMode === 'line',
      'sim-mode-card': getTheme.menuMode === 'card',
      'sim-mode-arrow': getTheme.menuMode === 'arrow',
    }"
  />
</template>
