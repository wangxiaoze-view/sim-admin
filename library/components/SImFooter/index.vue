<script lang="ts" setup>
  import { useChangeTheme } from '~/src/hooks'
  import { settings_config } from '~/src/config'

  defineOptions({
    name: 'SimFooter',
  })

  const { getTheme } = useChangeTheme()
  const { copyright } = settings_config
</script>
<template>
  <footer v-if="getTheme.isFooter" class="sim-footer">
    {{ copyright }}
  </footer>
</template>
