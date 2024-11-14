<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
  import { useSettinggsStore } from './stores/modules/settings'

  const { changePrimaryColor } = useSettinggsStore()

  changePrimaryColor()
</script>

<style scoped lang="scss"></style>
