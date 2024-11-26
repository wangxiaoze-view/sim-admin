<script setup lang="ts">
  import SimIcon from '../SimIcon/index.vue'

  defineOptions({
    name: 'SimSwitchDark',
  })
  import { useSwitchDark } from '~/src/hooks'
  const { getTheme, value, changeSwitch } = useSwitchDark()
</script>
<template>
  <el-switch class="sim-switch" v-model="value" v-if="getTheme.isMode" @change="changeSwitch">
    <template #active-action>
      <SimIcon icon-class="ri-moon-line" :size="14" />
    </template>
    <template #inactive-action>
      <SimIcon icon-class="ri-sun-line" :size="14" />
    </template>
  </el-switch>
</template>
