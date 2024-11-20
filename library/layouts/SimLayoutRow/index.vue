<script lang="ts" setup>
  import SimDrawerMenu from '~/library/components/SimDrawerMenu/index.vue'
  import SimRowHeader from '~/library/components/SimRowHeader/index.vue'
  import SimMainView from '~/library/components/SimMainView/index.vue'
  import { useChangeTheme } from '~/src/hooks'

  defineOptions({
    name: 'SimLayoutRow',
  })
  const { getTheme } = useChangeTheme()
</script>

<template>
  <div class="sim-layout-row">
    <SimDrawerMenu v-if="getTheme.device === 'mobile'" />
    <div class="sim-content">
      <SimRowHeader />
      <SimMainView />
    </div>
  </div>
</template>
