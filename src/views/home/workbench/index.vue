<script setup lang="ts">
  import SimWelcome from './components/welcome.vue'
  import SimChartData from './components/chartData.vue'
  import SimUpdate from './components/update.vue'
  defineOptions({
    name: 'HomeWorkbench',
  })
</script>
<template>
  <div class="home-container">
    <SimWelcome />
    <SimChartData />
  </div>
</template>

<style lang="scss" scoped>
  .home-container {
    background-color: transparent !important;
    border: none !important;
    padding: 0 !important;
  }
</style>
