<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import SimEcharts from '~/src/components/SimEcharts/index.vue'
  import { useWeekChart } from '../hook/useWeekChart'
  defineOptions({
    name: 'SimChartData',
  })
  const weekActive = ref('pre-week')
  const chartRef = ref<InstanceType<typeof SimEcharts>>()

  const { chartOptions, initData } = useWeekChart(chartRef)

  onMounted(() => {
    chartRef.value?.initChart('chart', chartOptions.value)
  })
</script>
<template>
  <el-row class="sim-chart" :gutter="20">
    <el-col :span="16">
      <div class="card border border-card-radius">
        <div class="header">
          <b>分析概览</b>
          <el-radio-group v-model="weekActive" @change="initData(true)">
            <el-radio-button label="上周" value="pre-week" />
            <el-radio-button label="本周" value="now-weel" />
          </el-radio-group>
        </div>
        <SimEcharts ref="chartRef" :style="{ height: `calc(100% - 36px)` }" />
      </div>
    </el-col>
    <el-col :span="8">
      <div class="card border border-card-radius"></div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  $height: 400px;
  .sim-chart {
    margin: var(--el-padding-sapce-large) 0;
    .font-red {
      color: var(--el-color-danger);
    }
    .card {
      height: $height;
      background-color: var(--el-bg-color);
      padding: var(--el-padding-sapce-large);

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--el-padding-sapce);
      }
    }
  }
</style>
