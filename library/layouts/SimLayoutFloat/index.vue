<script setup lang="ts">
  import SimAside from '~/library/components/SimAside/index.vue'
  import SimDrawerMenu from '~/library/components/SimDrawerMenu/index.vue'
  import SimHeader from '~/library/components/SimHeader/index.vue'
  import SimMainView from '~/library/components/SimMainView/index.vue'
  import { useChangeTheme } from '~/src/hooks'

  defineOptions({
    name: 'SimLayoutFloat',
  })

  const { getTheme } = useChangeTheme()
</script>

<template>
  <div class="sim-layout-float">
    <SimAside v-if="getTheme.device !== 'mobile'" />
    <SimDrawerMenu v-else />
    <div class="sim-content">
      <SimHeader />
      <SimMainView class="sim-view--container" />
    </div>
  </div>
</template>
