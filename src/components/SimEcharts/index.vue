<script setup lang="ts">
  import { ref } from 'vue'
  defineOptions({
    name: 'SimChart',
  })

  const chartId = ref('')

  const setChartId = (id: string) => {
    chartId.value = id
  }

  defineExpose({
    setChartId,
  })
</script>

<template>
  <div :id="chartId" style="width: 100%; height: 100%"></div>
</template>
