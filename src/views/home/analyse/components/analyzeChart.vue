<script setup lang="ts">
  import { ref } from 'vue'
  import SimEcharts from '~/src/components/SimEcharts/index.vue'
  import { useEcharts_4, useEcharts_5 } from '~/src/views/fun/echarts/hooks'

  const activeName = ref('first')

  const { chartRef: chartRef1, immediateRender: immediateRender1 } = useEcharts_4()
  const { chartRef: chartRef2, immediateRender: immediateRender2 } = useEcharts_5()

  const onTabChange = (val: string) => {
    if (val === 'first') immediateRender1()
    if (val === 'second') immediateRender2()
  }
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-tabs v-model="activeName" @tab-change="onTabChange">
      <el-tab-pane label="数据分析" name="first">
        <div class="chart-h">
          <SimEcharts ref="chartRef1" />
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
