<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useChart, useChart2, useChart5, useChart3, useChart6, useChart7 } from './config'
  import SimEchart from '~/src/components/SimEcharts/index.vue'

  defineOptions({
    name: 'FunEcharts',
  })

  const chartRef1 = ref()
  const chartRef2 = ref()
  const chartRef3 = ref()
  const chartRef4 = ref()
  const chartRef5 = ref()
  const chartRef6 = ref()

  const { chartOptions: data1 } = useChart5(chartRef1, true)
  const { chartOptions: data2 } = useChart2(chartRef2)
  const { chartOptions: data3 } = useChart(chartRef3)
  const { chartOptions: data4 } = useChart3(chartRef4)
  const { chartOptions: data5 } = useChart6(chartRef5)
  const { chartOptions: data6 } = useChart7(chartRef6)

  const setData = () => {
    chartRef1.value.initChart('canvas_1', data1.value)
    chartRef2.value.initChart('canvas_2', data2.value)
    chartRef3.value.initChart('canvas_3', data3.value)
    chartRef4.value.initChart('canvas_4', data4.value)
    chartRef5.value.initChart('canvas_5', data5.value)
    chartRef6.value.initChart('canvas_6', data6.value)
  }

  onMounted(setData)
</script>

<template>
  <div class="charts">
    <el-row class="sim-container" :gutter="20">
      <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
        <el-card class="sim-left sim-update--container" shadow="hover">
          <template #header>
            <div class="sim-update--header">
              <span>柱状图</span>
            </div>
          </template>
          <SimEchart ref="chartRef1" />
        </el-card>
      </el-col>
      <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
        <el-card class="sim-right sim-update--container" shadow="hover">
          <template #header>
            <div class="sim-update--header">
              <span>折线图</span>
            </div>
          </template>
          <SimEchart ref="chartRef2" />
        </el-card>
      </el-col>

      <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
        <el-card class="sim-right sim-update--container" shadow="hover">
          <template #header>
            <div class="sim-update--header">
              <span>雷达图</span>
            </div>
          </template>
          <SimEchart ref="chartRef3" />
        </el-card>
      </el-col>

      <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
        <el-card class="sim-right sim-update--container" shadow="hover">
          <template #header>
            <div class="sim-update--header">
              <span>饼图</span>
            </div>
          </template>
          <SimEchart ref="chartRef4" />
        </el-card>
      </el-col>

      <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
        <el-card class="sim-right sim-update--container" shadow="hover">
          <template #header>
            <div class="sim-update--header">
              <span>仪表盘</span>
            </div>
          </template>
          <SimEchart ref="chartRef5" />
        </el-card>
      </el-col>

      <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
        <el-card class="sim-right sim-update--container" shadow="hover">
          <template #header>
            <div class="sim-update--header">
              <span>词云图</span>
            </div>
          </template>
          <SimEchart ref="chartRef6" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .mb-20 {
    margin-bottom: 20px;
  }
  :deep(.el-card__body) {
    height: 300px;
  }
</style>
