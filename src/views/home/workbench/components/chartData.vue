<script setup lang="ts">
  import { ref } from 'vue'
  import SimEcharts from '~/src/components/SimEcharts/index.vue'
  import { useWeekChart, useColumnChart } from '~/src/views/fun/echarts/hooks'
  defineOptions({
    name: 'SimChartData',
  })
  const weekActive = ref('pre-week')

  const { chartRef, immediateRender } = useWeekChart()
  const { chartRef: chartColumnarRef } = useColumnChart()
</script>
<template>
  <el-row class="sim-chart" :gutter="20">
    <el-col class="mb-20" :lg="16" :md="24" :sm="24" :xl="16" :xs="24">
      <el-card shadow="hover">
        <div class="header">
          <b>分析概览</b>
          <el-radio-group v-model="weekActive" @change="immediateRender">
            <el-radio-button label="上周" value="pre-week" />
            <el-radio-button label="本周" value="now-weel" />
          </el-radio-group>
        </div>
        <SimEcharts ref="chartRef" :style="{ height: `calc(100% - 36px)` }" />
      </el-card>
    </el-col>
    <el-col class="mb-20" :lg="8" :md="24" :sm="24" :xl="8" :xs="24">
      <el-card shadow="hover">
        <div class="header">
          <b>解决周期</b>
        </div>
        <SimEcharts ref="chartColumnarRef" />
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  $height: 400px;
  .sim-chart {
    .font-red {
      color: var(--el-color-danger);
    }

    :deep() {
      .el-card__body {
        height: $height;
      }
    }
  }
</style>
