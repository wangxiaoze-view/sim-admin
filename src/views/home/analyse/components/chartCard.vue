<script setup lang="ts">
  import SimEcharts from '~/src/components/SimEcharts/index.vue'
  import { useEcharts_1, useEcharts_2, useEcharts_3 } from '~/src/views/fun/echarts/hooks'

  const { chartRef: chartRef1 } = useEcharts_1()
  const { chartRef: chartRef2 } = useEcharts_2()
  const { chartRef: chartRef3 } = useEcharts_3()
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>销售率</span>
        </div>
        <SimEcharts ref="chartRef1" />
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
