<script setup lang="ts">
  import SimWelcome from './components/welcome.vue'
  import SimChartData from './components/chartData.vue'
  import SimDataContainer from './components/dataContainer.vue'
  defineOptions({
    name: 'HomeWorkbench',
  })
</script>
<template>
  <div class="home-page">
    <SimWelcome />
    <SimChartData />
    <SimDataContainer />
  </div>
</template>
