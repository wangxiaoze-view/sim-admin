<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useChart, useChart2, useChart3 } from '~/src/views/fun/echarts/config/index'
  import SimEcharts from '~/src/components/SimEcharts/index.vue'
  const chartRef = ref()
  const chartRef2 = ref()
  const chartRef3 = ref()

  const { chartOptions } = useChart(chartRef)
  const { chartOptions: chartOptions_2 } = useChart2(chartRef2)
  const { chartOptions: chartOptions_3 } = useChart3(chartRef3)
  onMounted(() => {
    chartRef.value?.initChart('xs-canvas', chartOptions.value)
    chartRef2.value?.initChart('dl-canvas', chartOptions_2.value)
    chartRef3.value?.initChart('zb-canvas', chartOptions_3.value)
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>销售率</span>
        </div>
        <SimEcharts ref="chartRef" />
      </el-card>
    </el-col>
    <el-col ::md="24" :lg="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>下单量</span>
        </div>
        <SimEcharts ref="chartRef2" />
      </el-card>
    </el-col>

    <el-col :md="24" :lg="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>活跃占比</span>
        </div>
        <SimEcharts ref="chartRef3" />
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
  .mb-20 {
    margin-bottom: 20px;
  }
  :deep(.el-card__body) {
    height: 300px;
  }
</style>
