import SimEchart from '~/src/components/SimEcharts/index.vue'

import { ref, type Ref } from 'vue'
import { ENUM_COLOR } from '~/src/enum'

export function useColumnChart(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const textData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  const max = textData.length
  const gapTime = 8 * 1000
  const chartOptions = ref()
  let startTime = 0
  const data = ref<number[]>([])
  const colorArray = Object.values(ENUM_COLOR).map((item) => {
    return {
      top: item,
      bottom: 'rgba(11, 42, 84, .3)',
    }
  })

  const initData = () => {
    const endTime = Date.now()
    if (endTime - startTime >= gapTime) {
      data.value = []
      for (let i = 0; i < max; i++) {
        const num = Math.round(Math.random() * max)
        data.value.push(num)
      }

      chartOptions.value = {
        tooltip: {
          show: true,
          formatter: '{b}:{c}',
        },
        grid: {
          left: '5%',
          top: '1%',
          right: '1%',
          bottom: '8%',
          containLabel: true,
        },

        xAxis: {
          type: 'value',
          show: false,
          max: 8,
          position: 'top',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false,
              alignWithLabel: false,
              length: 5,
            },
            splitLine: {
              //网格线
              show: false,
            },
            inverse: 'true', //排序
            axisLine: {
              show: false,
              lineStyle: {
                color: '#c56790',
              },
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
        ],
        series: [
          {
            name: '能耗值',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                textStyle: {
                  color: '#c56790', //color of value
                },
              },
            },
            itemStyle: {
              normal: {
                show: true,
                color: function (params: any) {
                  let num = colorArray.length
                  return {
                    type: 'linear',
                    colorStops: [
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                      {
                        offset: 0,
                        color: colorArray[params.dataIndex % num].bottom,
                      },
                      {
                        offset: 1,
                        color: colorArray[params.dataIndex % num].top,
                      },
                    ],
                  }
                },
                barBorderRadius: 70,
                borderWidth: 0,
                borderColor: '#333',
              },
            },
            barGap: '2%',
            barCategoryGap: '50%',
            data: data.value,
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
