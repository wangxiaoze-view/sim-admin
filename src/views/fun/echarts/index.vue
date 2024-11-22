<script setup lang="ts">
  import SimEchart from '~/src/components/SimEcharts/index.vue'
  import {
    useEcharts_1,
    useEcharts_2,
    useEcharts_3,
    useEcharts_4,
    useEcharts_5,
    useEcharts_6,
    useEcharts_7,
  } from './hooks'

  defineOptions({
    name: 'FunEcharts',
  })

  const { chartRef: chartRef1 } = useEcharts_1()
  const { chartRef: chartRef2 } = useEcharts_2()
  const { chartRef: chartRef3 } = useEcharts_3()
  const { chartRef: chartRef4 } = useEcharts_4()
  const { chartRef: chartRef5 } = useEcharts_5()
  const { chartRef: chartRef6 } = useEcharts_6()
  const { chartRef: chartRef7 } = useEcharts_7()
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>雷达图</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef1" />
        </div>
      </el-card>
    </el-col>
    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>折线图</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef2" />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>饼图</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef3" />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>堆积图</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef4" />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>柱状图</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef5" />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>仪表盘</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef6" />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>词云图</span>
        </div>
        <div class="chart-hei">
          <SimEchart ref="chartRef7" />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .chart-hei {
    height: 320px;
  }
</style>
