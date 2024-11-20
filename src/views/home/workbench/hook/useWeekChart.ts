import { ref, type Ref } from 'vue'
import * as echarts from 'echarts'
import { ENUM_COLOR } from '~/src/enum'
// TODO: 后期放基础包里
import dayjs from 'dayjs'
import SimEchart from '@/components/SimEchart/index.vue'

interface IWeekChart {
  time: string
  count: number
  commit: number
  chore: number
}

// TODO：后期代码优化
export function useWeekChart(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const max = 7
  const gapTime = 8 * 1000
  const data = ref<IWeekChart[]>([])
  const chartOptions = ref()

  let startTime = 0
  const initData = (isReset?: boolean) => {
    const endTime = Date.now()
    if (endTime - startTime >= gapTime || isReset) {
      data.value = []
      for (let i = 0; i < max; i++) {
        data.value.push({
          time: dayjs().subtract(i, 'day').format('MM-DD'),
          count: Math.round(Math.random() * 10),
          commit: Math.round(Math.random() * 10 + 1),
          chore: Math.round(Math.random() * 10 + 2),
        })
      }

      chartOptions.value = {
        backgroundColor: '#fff',
        legend: {
          show: false,
          icon: 'circle',
          top: '13%',
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 25,
        },
        grid: {
          x: 20,
          x2: 20,
          y: 10,
          y2: 30,
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: [
          {
            type: 'category',
            data: data.value.map((i) => i.time),
            axisLine: {
              lineStyle: {
                color: '#ddd',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: '#c56790',
              margin: 15,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#eee',
                type: 'dashed',
              },
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#ddd',
              },
            },
            axisLabel: {
              color: '#c56790',
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#eee',
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: '更新次数',
            type: 'line',
            data: data.value.map((i) => i.count),
            symbolSize: 6,
            symbol: 'circle',
            smooth: true,
            lineStyle: {
              color: ENUM_COLOR.COLOR_9,
            },
            itemStyle: {
              color: ENUM_COLOR.COLOR_9,
              borderColor: ENUM_COLOR.COLOR_9,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: ENUM_COLOR.COLOR_9,
                },
                {
                  offset: 1,
                  color: '#fe9a8b03',
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: ENUM_COLOR.COLOR_9,
                    },
                    {
                      offset: 0.4,
                      color: ENUM_COLOR.COLOR_9,
                    },
                    {
                      offset: 0.5,
                      color: '#fff',
                    },
                    {
                      offset: 0.7,
                      color: '#fff',
                    },
                    {
                      offset: 0.8,
                      color: '#fff',
                    },
                    {
                      offset: 1,
                      color: '#fff',
                    },
                  ],
                },
                borderColor: ENUM_COLOR.COLOR_9,
                borderWidth: 2,
              },
            },
          },
          {
            name: '提交次数',
            type: 'line',
            data: data.value.map((i) => i.commit),
            symbolSize: 6,
            symbol: 'circle',
            smooth: true,
            lineStyle: {
              color: ENUM_COLOR.COLOR_6,
            },
            itemStyle: {
              color: ENUM_COLOR.COLOR_6,
              borderColor: ENUM_COLOR.COLOR_6,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: ENUM_COLOR.COLOR_6,
                },
                {
                  offset: 1,
                  color: '#9E87FF03',
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: ENUM_COLOR.COLOR_6,
                    },
                    {
                      offset: 0.4,
                      color: ENUM_COLOR.COLOR_6,
                    },
                    {
                      offset: 0.5,
                      color: '#fff',
                    },
                    {
                      offset: 0.7,
                      color: '#fff',
                    },
                    {
                      offset: 0.8,
                      color: '#fff',
                    },
                    {
                      offset: 1,
                      color: '#fff',
                    },
                  ],
                },
                borderColor: ENUM_COLOR.COLOR_6,
                borderWidth: 2,
              },
            },
          },
          {
            name: '优化次数',
            type: 'line',
            data: data.value.map((i) => i.chore),
            symbolSize: 6,
            symbol: 'circle',
            smooth: true,
            lineStyle: {
              color: ENUM_COLOR.COLOR_8,
            },
            itemStyle: {
              color: ENUM_COLOR.COLOR_8,
              borderColor: ENUM_COLOR.COLOR_8,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: ENUM_COLOR.COLOR_8,
                },
                {
                  offset: 1,
                  color: '#9E87FF03',
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: ENUM_COLOR.COLOR_8,
                    },
                    {
                      offset: 0.4,
                      color: ENUM_COLOR.COLOR_8,
                    },
                    {
                      offset: 0.5,
                      color: '#fff',
                    },
                    {
                      offset: 0.7,
                      color: '#fff',
                    },
                    {
                      offset: 0.8,
                      color: '#fff',
                    },
                    {
                      offset: 1,
                      color: '#fff',
                    },
                  ],
                },
                borderColor: ENUM_COLOR.COLOR_8,
                borderWidth: 2,
              },
            },
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    requestAnimationFrame(() => {
      initData()
    })
  }

  initData()

  return {
    chartOptions,
    initData,
  }
}
