import { ENUM_COLOR } from '~/src/enum'
import * as echarts from 'echarts'
import { Ref } from 'vue'

// 首页周期图表
export interface IWeekData {
  time: string
  count: number
  commit: number
  chore: number
}
export function getWeekChartConfig(data: Ref<IWeekData[]>) {
  return {
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
}

const colors = Object.values(ENUM_COLOR)

// 首页周期能耗图表
const colorArray = colors.map((item) => {
  return {
    top: item,
    bottom: 'rgba(11, 42, 84, .3)',
  }
})
export const textData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

export function getColumnChartConfig(data: Ref<number[]>) {
  return {
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
        data: textData,
      },
    ],
    series: [
      {
        name: '能耗值',
        type: 'bar',
        label: {
          show: true,
          position: 'right',
          formatter: '{c}',
          color: '#c56790', //color of value
        },
        itemStyle: {
          show: true,
          color: function (params: any) {
            const num = colorArray.length
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
          borderRadius: 70,
          borderWidth: 0,
          borderColor: '#333',
        },
        barGap: '2%',
        barCategoryGap: '50%',
        data: data.value,
      },
    ],
  }
}

// echarts 页面 的图表配置

export const indicator_1 = [
  { name: '手机', max: 1000 },
  { name: '电脑', max: 1000 },
  { name: '打印机', max: 1000 },
  { name: '鼠标', max: 1000 },
  { name: '键盘', max: 1000 },
]
export function getEchartsConfig_1(data_1: Ref<number[]>, data_2: Ref<number[]>) {
  return {
    tooltip: {},
    radar: {
      center: ['50%', '50%'],
      radius: '75%',
      axisName: {
        color: '#3D4D65',
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
      indicator: indicator_1,
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: data_1.value,
            name: '下单量',
            itemStyle: {
              borderWidth: 2,
              color: ENUM_COLOR.COLOR_4,
            },
            areaStyle: {
              color: 'rgba(115,192,222,0.4)',
            },
          },
          {
            value: data_2.value,
            name: '销售金额',
            itemStyle: {
              borderWidth: 2,
              color: ENUM_COLOR.COLOR_9,
            },
            areaStyle: {
              color: 'rgba(254,154,139, 0.4)',
            },
          },
        ],
      },
    ],
  }
}

export const date_1 = Array.from({ length: 12 }).map((_, index) => `${index + 1}月`)
export function getEchartsConfig_2(data: Ref<number[]>) {
  return {
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
        data: date_1,
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
          color: '#556677',
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
          color: '#556677',
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
        data: data.value,
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
          color: ENUM_COLOR.COLOR_5,
          borderColor: ENUM_COLOR.COLOR_5,
        },
      },
    ],
  }
}

export interface IOptions3 {
  name: string
  value: number
}

export function getEchartsConfig_3(data: Ref<IOptions3[]>) {
  return {
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
}

export function getEchartsConfig_4(data_1: Ref<number[]>, data_2: Ref<number[]>) {
  return {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: '3%',
      y2: 40,
      x2: 20,
    },
    xAxis: [
      {
        type: 'category',
        data: date_1,
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
          color: '#556677',

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
          color: '#556677',
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
        data: data_1.value,
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
          color: ENUM_COLOR.COLOR_5,
          borderColor: ENUM_COLOR.COLOR_5,
        },
      },

      {
        name: '活跃人数',
        type: 'line',
        data: data_2.value,
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
          color: ENUM_COLOR.COLOR_4,
          borderColor: ENUM_COLOR.COLOR_4,
        },
      },
    ],
  }
}

export function getEchartsConfig_5(data: Ref<number[]>) {
  return {
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
        data: date_1,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#DCE2E8',
          },
        },
        axisLabel: {
          interval: 0,
          color: '#556677',
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
          color: '#556677',
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
        data: data.value,
        barWidth: '30px',
        label: {},
        itemStyle: {
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
          borderRadius: [30, 30, 0, 0],
        },
      },
    ],
  }
}

export function getEchartsConfig_6() {
  const data = Math.round(Math.random() * 100)

  return {
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
              [data / 100, ENUM_COLOR.COLOR_6],
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
          padding: [0, 0, 0, 0],
          fontSize: 18,
          fontWeight: '700',
          color: ENUM_COLOR.COLOR_6,
        },
        title: {
          //标题
          show: true,
          offsetCenter: [0, 46], // x, y，单位px
          color: '#fff',
          fontSize: 14, //表盘上的标题文字大小
          fontWeight: 400,
          fontFamily: 'PingFangSC',
        },
        data: [
          {
            name: '数值',
            value: data,
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
}

export function getEchartsConfig_7() {
  return {
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
          show: true,
        },
        data: [
          {
            name: '医疗队女队员集体理平头和光头',
            value: 2518,
            symbolSize: 50,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[3],
              color: colors[3],
            },
          },
          {
            name: '缅怀疫情中逝去的人们',
            value: 4730,
            symbolSize: 88,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[4],
              color: colors[4],
            },
          },
          {
            name: '妨害疫情防控的违法行为',
            value: 1952,
            symbolSize: 55,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[5],
              color: colors[5],
            },
          },
          {
            name: '66岁重症患者8天快速康复',
            value: 926,
            symbolSize: 70,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[6],
              color: colors[6],
            },
          },
          {
            name: '别让快递小哥一直等在寒风中',
            value: 4536,
            symbolSize: 67,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[7],
              color: colors[7],
            },
          },
          {
            name: '湖北以外地区新增病例数连降5天',
            value: 750,
            symbolSize: 47,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[8],
              color: colors[8],
            },
          },
          {
            name: '女儿写给战疫一线爸爸的信',
            value: 493,
            symbolSize: 82,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[9],
              color: colors[9],
            },
          },
          {
            name: '青海连续3天无新增病例',
            value: 385,
            symbolSize: 59,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[2],
              color: colors[2],
            },
          },
          {
            name: '辽宁再派1000名医护人员驰援武汉',
            value: 4960,
            symbolSize: 90,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[3],
              color: colors[3],
            },
          },
          {
            name: '抗击新型肺炎第一线',
            value: 8694000,
            symbolSize: 134,
            draggable: true,
            itemStyle: {
              shadowBlur: 100,
              shadowColor: colors[4],
              color: colors[4],
            },
          },
        ],
      },
    ],
  }
}
