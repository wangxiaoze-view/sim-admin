<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useChart4, useChart5 } from '~/src/views/fun/echarts/config/index'
  import SimEcharts from '~/src/components/SimEcharts/index.vue'

  const activeName = ref('first')
  const chartRef = ref()
  const chartRef2 = ref()

  const { chartOptions } = useChart4(chartRef)
  const { chartOptions: chartOptions_2 } = useChart5(chartRef2)

  const setData = () => {
    chartRef.value?.initChart('sj-canvas', chartOptions.value)
    chartRef2.value?.initChart('hy-canvas', chartOptions_2.value)
  }
  const onTabChange = () => {
    chartRef.value?.clearEchartsData()
    chartRef2.value?.clearEchartsData()
    setData()
  }
  onMounted(setData)
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-tabs v-model="activeName" @tab-change="onTabChange">
      <el-tab-pane label="数据分析" name="first">
        <div class="chart-h">
          <SimEcharts ref="chartRef" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="活跃分析" name="second">
        <div class="chart-h">
          <SimEcharts ref="chartRef2" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<style lang="scss" scoped>
  .chart-h {
    width: 100%;
    height: 300px;
  }
</style>
