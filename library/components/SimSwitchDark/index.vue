<script setup lang="ts">
  import SImIcon from '~/src/components/SimIcon/index.vue'
  import { useSwitchDark } from '~/src/hooks'
  const { isMode, value, changeSwitch } = useSwitchDark()
</script>
<template>
  <el-switch class="sim-switch" v-model="value" v-if="isMode" @change="changeSwitch">
    <template #active-action>
      <SImIcon icon-class="ri-sun-line" :size="14" />
    </template>
    <template #inactive-action>
      <SImIcon icon-class="ri-moon-line" :size="14" />
    </template>
  </el-switch>
</template>
