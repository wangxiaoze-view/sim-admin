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
  <el-card class="border border-card-radius sim-footer" v-if="getTheme.isFooter">
    {{ copyright }}
  </el-card>
</template>
