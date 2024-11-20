<script setup lang="ts">
  import { useChart } from '~/src/hooks'
  defineOptions({
    name: 'SimChart',
  })
  const { chartId, initChart, setChartData, resizeChart, chartIntance } = useChart()
  defineExpose({
    initChart,
    setChartData,
    resizeChart,
    chartIntance,
  })
</script>

<template>
  <div :id="chartId" style="width: 100%; height: 100%"></div>
</template>
