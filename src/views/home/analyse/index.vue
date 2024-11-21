<script setup lang="ts">
  import SimBenchCard from './components/benchCard.vue'
  import SimChart from './components/chartCard.vue'
  import SimDelivery from './components/deliveryCard.vue'
  import SimAnalyzeChart from './components/analyzeChart.vue'
  defineOptions({
    name: 'HomeAnalyse',
  })
</script>

<template>
  <div className="analyse-page">
    <SimBenchCard />
    <SimChart />
    <SimDelivery />
    <SimAnalyzeChart />
  </div>
</template>
