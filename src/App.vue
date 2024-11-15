<script lang="ts" setup>
  import SimApp from '~/library/components/SimApp/index.vue'
  import { useSettinggsStore } from './stores/modules/settings'
  const { changePrimaryColor, setTheme } = useSettinggsStore()
  setTheme()
  changePrimaryColor()
</script>

<template>
  <SimApp />
</template>

<style scoped lang="scss"></style>
