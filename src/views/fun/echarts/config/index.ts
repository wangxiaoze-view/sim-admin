import { ref, type Ref } from 'vue'
import * as echarts from 'echarts'
import { ENUM_COLOR } from '~/src/enum'
import SimEchart from '~/src/components/SimEcharts/index.vue'

// TODO: 后期优化

export function useChart(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const gapTime = 3 * 1000
  const chartOptions = ref()

  const indicator = [
    { name: '手机', max: 1000 },
    { name: '电脑', max: 1000 },
    { name: '打印机', max: 1000 },
    { name: '鼠标', max: 1000 },
    { name: '键盘', max: 1000 },
  ]

  const data_1 = ref<number[]>([])
  const data_2 = ref<number[]>([])

  let startTime = 0

  const initData = () => {
    const endTime = Date.now()
    data_1.value = []
    data_2.value = []

    if (endTime - startTime >= gapTime) {
      for (let i = 0; i < indicator.length; i++) {
        data_1.value.push(Math.round(Math.random() * indicator[i].max))
        data_2.value.push(Math.round(Math.random() * indicator[i].max + i))
      }

      chartOptions.value = {
        tooltip: {},
        radar: {
          center: ['50%', '50%'],
          radius: '75%',
          name: {
            textStyle: {
              color: '#3D4D65',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#DEDEDE',
              width: 1,
              type: 'dotted',
            },
          },
          splitLine: {
            lineStyle: {
              color: ['#DEDEDE'],
              width: 1,
            },
          },
          splitArea: {},
          indicator: indicator,
        },
        series: [
          {
            type: 'radar',

            data: [
              {
                value: data_1,
                name: '下单量',
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    color: ENUM_COLOR.COLOR_4,
                  },
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(115,192,222,0.4)',
                  },
                },
              },
              {
                value: data_2,
                name: '销售金额',
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    color: ENUM_COLOR.COLOR_9,
                  },
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(254,154,139, 0.4)',
                  },
                },
              },
            ],
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}

export function useChart2(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const gapTime = 5 * 1000
  const chartOptions = ref()

  const data = ref<number[]>([])
  let startTime = 0

  const date: string[] = []
  for (let i = 1; i < 13; i++) {
    date.push(i + '月')
  }

  const initData = () => {
    const endTime = Date.now()

    if (endTime - startTime >= gapTime) {
      data.value = []
      for (let i = 0; i < date.length; i++) {
        data.value.push(Math.round(Math.random() * 1000))
      }

      chartOptions.value = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          x: 40,
          y: 20,
          y2: 60,
          x2: 10,
        },
        xAxis: [
          {
            type: 'category',
            data: date,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisTick: {
              show: true,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#556677',
              },
              // 默认x轴字体大小
              fontSize: 12,
              // margin:文字到x轴的距离
              margin: 15,
            },
            splitLine: {
              show: true,
              lineStyle: {
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
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#556677',
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: '下单量',
            type: 'line',
            data: data,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              shadowColor: 'rgba(158,135,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
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
            itemStyle: {
              normal: {
                color: ENUM_COLOR.COLOR_5,
                borderColor: ENUM_COLOR.COLOR_5,
              },
            },
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}

export function useChart3(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const gapTime = 8 * 1000
  const chartOptions = ref()

  let startTime = 0
  const data = ref<{ name: string; value: number }[]>([])

  const initData = () => {
    const endTime = Date.now()

    if (endTime - startTime >= gapTime) {
      data.value = []
      const names = ['VPN', '交换机', '防火墙', 'WAF', '堡垒机']
      names.map((i) => {
        data.value.push({
          name: i,
          value: Math.round(Math.random() * 1000),
        })
      })
      chartOptions.value = {
        color: Object.values(ENUM_COLOR),
        tooltip: {
          show: true,
          formatter: '{b}:{d}%',
        },

        series: [
          {
            name: '网络安全设备',
            type: 'pie',
            center: ['50%', '50%'], //圆心的位置
            top: '2%', //单单指的饼图距离上面的距离，top越大饼图越小
            left: '0%', //单单指的饼图距离左面的距离，会改变饼图的大小
            radius: ['0%', '70%'], //环形图的本质就在这里 [内半径!=0，外半径] 外半径越大，圆越大
            avoidLabelOverlap: false, //做同心圆用到
            clockwise: false, //顺时针排列
            startAngle: 160, //起始角度 影响不大
            roseType: 'area', //area|radius

            label: {
              show: true, //false不显示饼图上的标签
              position: 'outside', //inside（在饼图上显示）,outside(默认就会出现引导线) center
              formatter: '{b}:{c}',
            },

            //只有设置了label:show=ture;position=outside 设置labelLine才会有效
            labelLine: {
              show: true, //显示引导线
              smooth: true, //是否光滑连接线
            },
            itemStyle: {
              //每个扇形的设置
              borderColor: 'rgba(0,0,0,.1)', //扇形边框颜色
              borderWidth: 0, //扇形边框大小 要先给borderColor颜色 设置borderWidth才会有效果
            },
            data: data.value.sort((a, b) => b.value - a.value), //数组从大到小排序

            emphasis: {
              scale: true,
              scaleSize: 10,

              //启用鼠标放上去放大效果，这个挺好的
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}

export function useChart4(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const gapTime = 5 * 1000
  const chartOptions = ref()

  const data = ref<number[]>([])
  const data2 = ref<number[]>([])
  let startTime = 0

  const date: string[] = []
  for (let i = 1; i < 13; i++) {
    date.push(i + '月')
  }

  const initData = () => {
    const endTime = Date.now()
    data.value = []
    data2.value = []

    if (endTime - startTime >= gapTime) {
      for (let i = 0; i < date.length; i++) {
        data.value.push(Math.round(Math.random() * 1000))
        data2.value.push(Math.round(Math.random() * 1000 + i))
      }

      chartOptions.value = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          x: 40,
          y: '5%',
          y2: 40,
          x2: 20,
        },
        xAxis: [
          {
            type: 'category',
            data: date,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisTick: {
              show: true,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#556677',
              },
              // 默认x轴字体大小
              fontSize: 12,
              // margin:文字到x轴的距离
              margin: 15,
            },
            splitLine: {
              show: true,
              lineStyle: {
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
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#556677',
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: '下单量',
            type: 'line',
            data: data2,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              shadowColor: 'rgba(158,135,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
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
            itemStyle: {
              normal: {
                color: ENUM_COLOR.COLOR_5,
                borderColor: ENUM_COLOR.COLOR_5,
              },
            },
          },

          {
            name: '活跃人数',
            type: 'line',
            data: data,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
              focus: 'series',
            },
            lineStyle: {
              width: 2,
              shadowColor: 'rgba(158,135,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 15,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: ENUM_COLOR.COLOR_2,
                },
                {
                  offset: 1,
                  color: '#fe9a8b03',
                },
              ]),
            },
            itemStyle: {
              normal: {
                color: ENUM_COLOR.COLOR_4,
                borderColor: ENUM_COLOR.COLOR_4,
              },
            },
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    // requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}

export function useChart5(chartRef: Ref<InstanceType<typeof SimEchart>>, isWatch = false) {
  const gapTime = 5 * 1000
  const chartOptions = ref()

  const data = ref<number[]>([])
  let startTime = 0

  const date: string[] = []
  for (let i = 1; i < 13; i++) {
    date.push(i + '月')
  }

  const initData = () => {
    const endTime = Date.now()
    data.value = []

    if (endTime - startTime >= gapTime) {
      for (let i = 0; i < date.length; i++) {
        data.value.push(Math.round(Math.random() * 1000))
      }

      chartOptions.value = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          x: 40,
          y: '5%',
          y2: 40,
          x2: 20,
        },
        xAxis: [
          {
            type: 'category',
            color: '#59588D',
            data: date,

            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#556677',
              },
              // 默认x轴字体大小
              fontSize: 12,
              // margin:文字到x轴的距离
              margin: 15,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              textStyle: {
                color: '#556677',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8',
              },
            },

            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            data: data,
            barWidth: '30px',
            label: {},
            itemStyle: {
              normal: {
                color: function () {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(70, 157, 226)', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'rgba(70, 157, 226,.1)', // 100% 处的颜色
                      },
                    ],
                    false
                  )
                },
                barBorderRadius: [30, 30, 0, 0],
              },
            },
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    isWatch && requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}

export function useChart6(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const gapTime = 5 * 1000
  const chartOptions = ref()

  let startTime = 0

  const initData = () => {
    const endTime = Date.now()

    if (endTime - startTime >= gapTime) {
      const value = Math.round(Math.random() * 100)

      chartOptions.value = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
        },

        series: [
          {
            name: '进度条',
            type: 'gauge',
            // center: ['20%', '50%'],
            radius: '70%',

            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [value / 100, ENUM_COLOR.COLOR_6],
                  [1, '#111F42'],
                ],
                width: 8,
              },
            },
            axisLabel: {
              show: false,
            },

            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              formatter: function (value: number) {
                if (value !== 0) {
                  const num = Math.round(value)
                  return parseInt(num.toString()).toFixed(0) + '%'
                } else {
                  return 0
                }
              },
              offsetCenter: [0, 82],
              textStyle: {
                padding: [0, 0, 0, 0],
                fontSize: 18,
                fontWeight: '700',
                color: ENUM_COLOR.COLOR_6,
              },
            },
            title: {
              //标题
              show: true,
              offsetCenter: [0, 46], // x, y，单位px
              textStyle: {
                color: '#fff',
                fontSize: 14, //表盘上的标题文字大小
                fontWeight: 400,
                fontFamily: 'PingFangSC',
              },
            },
            data: [
              {
                name: '数值',
                value: value,
              },
            ],
            pointer: {
              show: true,
              length: '75%',
              radius: '20%',
              width: 10, //指针粗细
            },
            animationDuration: 4000,
          },
          {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '90%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, 'rgba(0,0,0,0)']],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: '#4d5bd1',
              distance: 25,
              formatter: function (v: number) {
                switch (v + '') {
                  case '0':
                    return '0'
                  case '10':
                    return '10'
                  case '20':
                    return '20'
                  case '30':
                    return '30'
                  case '40':
                    return '40'
                  case '50':
                    return '50'
                  case '60':
                    return '60'
                  case '70':
                    return '70'
                  case '80':
                    return '80'
                  case '90':
                    return '90'
                  case '100':
                    return '100'
                }
              },
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 7,
              lineStyle: {
                color: ENUM_COLOR.COLOR_6, //用颜色渐变函数不起作用
                width: 1,
              },
              length: -8,
            }, //刻度样式
            splitLine: {
              show: true,
              length: -20,
              lineStyle: {
                color: ENUM_COLOR.COLOR_6, //用颜色渐变函数不起作用
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}

export function useChart7(chartRef: Ref<InstanceType<typeof SimEchart>>) {
  const gapTime = 5 * 1000
  const chartOptions = ref()

  let startTime = 0

  const initData = () => {
    const endTime = Date.now()

    if (endTime - startTime >= gapTime) {
      const colorList = Object.values(ENUM_COLOR)

      chartOptions.value = {
        tooltip: {},
        animationDurationUpdate: function (idx: number) {
          // 越往后的数据延迟越大
          return idx * 100
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 500,
              edgeLength: 10,
            },
            roam: true,
            label: {
              normal: {
                show: true,
              },
            },
            data: [
              {
                name: '医疗队女队员集体理平头和光头',
                value: 2518,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[3],
                    color: colorList[3],
                  },
                },
              },
              {
                name: '缅怀疫情中逝去的人们',
                value: 4730,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[4],
                    color: colorList[4],
                  },
                },
              },
              {
                name: '妨害疫情防控的违法行为',
                value: 1952,
                symbolSize: 55,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[5],
                    color: colorList[5],
                  },
                },
              },
              {
                name: '66岁重症患者8天快速康复',
                value: 926,
                symbolSize: 70,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[6],
                    color: colorList[6],
                  },
                },
              },
              {
                name: '别让快递小哥一直等在寒风中',
                value: 4536,
                symbolSize: 67,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[7],
                    color: colorList[7],
                  },
                },
              },
              {
                name: '湖北以外地区新增病例数连降5天',
                value: 750,
                symbolSize: 47,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[8],
                    color: colorList[8],
                  },
                },
              },
              {
                name: '女儿写给战疫一线爸爸的信',
                value: 493,
                symbolSize: 82,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[9],
                    color: colorList[9],
                  },
                },
              },
              {
                name: '青海连续3天无新增病例',
                value: 385,
                symbolSize: 59,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[2],
                    color: colorList[2],
                  },
                },
              },
              {
                name: '辽宁再派1000名医护人员驰援武汉',
                value: 4960,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[3],
                    color: colorList[3],
                  },
                },
              },
              {
                name: '抗击新型肺炎第一线',
                value: 8694000,
                symbolSize: 134,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: colorList[4],
                    color: colorList[4],
                  },
                },
              },
            ],
          },
        ],
      }
      chartRef.value?.setChartData(chartOptions.value)
      startTime = endTime
    }
    requestAnimationFrame(initData)
  }

  initData()

  return {
    chartOptions,
  }
}
