<script lang="ts" setup>
  import SimAside from '~/library/components/SimAside/index.vue'
  import SimDrawerMenu from '~/library/components/SimDrawerMenu/index.vue'
  import SimHeader from '~/library/components/SimHeader/index.vue'
  import SimMainView from '~/library/components/SimMainView/index.vue'
  import { useChangeTheme } from '~/src/hooks'

  defineOptions({
    name: 'SimLayoutOrdinary',
  })

  const { getTheme } = useChangeTheme()
</script>
<template>
  <div class="sim-layout-ordinary">
    <SimAside v-if="getTheme.device !== 'mobile'" :is-collapse="getTheme.collapse" />
    <SimDrawerMenu v-else />
    <div class="sim-content">
      <SimHeader />
      <SimMainView />
    </div>
  </div>
</template>
