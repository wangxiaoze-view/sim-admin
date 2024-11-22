import { useChart } from '~/src/hooks'
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  getWeekChartConfig,
  textData,
  getColumnChartConfig,
  type IWeekData,
  indicator_1,
  getEchartsConfig_1,
  date_1,
  getEchartsConfig_2,
  type IOptions3,
  getEchartsConfig_3,
  getEchartsConfig_4,
  getEchartsConfig_5,
  getEchartsConfig_6,
  getEchartsConfig_7,
} from '../config'

// 首页的俩个图表
export function useWeekChart() {
  const chartRef = ref()
  const { immediateRender } = useChart({
    chartId: 'weekChart-id',
    time: 3000,
    chartRef,
    beforeRender: () => {
      const data = ref<IWeekData[]>([])
      for (let i = 0; i < 7; i++) {
        data.value.push({
          time: dayjs().subtract(i, 'day').format('MM-DD'),
          count: Math.round(Math.random() * 10),
          commit: Math.round(Math.random() * 10 + 1),
          chore: Math.round(Math.random() * 10 + 2),
        })
      }
      return getWeekChartConfig(data)
    },
  })

  return {
    chartRef,
    immediateRender,
  }
}
export function useColumnChart() {
  const chartRef = ref()
  useChart({
    chartId: 'columnChart-id',
    time: 3000,
    chartRef,
    beforeRender: () => {
      const data = ref<number[]>([])
      const len = textData.length
      for (let i = 0; i < len; i++) {
        data.value.push(Math.round(Math.random() * len))
      }
      return getColumnChartConfig(data)
    },
  })

  return {
    chartRef,
  }
}

// echarts页面
export function useEcharts_1() {
  const chartRef = ref()
  useChart({
    chartId: 'chart_1-id',
    time: 3000,
    chartRef,
    beforeRender: () => {
      const data_1 = ref<number[]>([])
      const data_2 = ref<number[]>([])
      const len = indicator_1.length
      for (let i = 0; i < len; i++) {
        data_1.value.push(Math.round(Math.random() * indicator_1[i].max))
        data_2.value.push(Math.round(Math.random() * indicator_1[i].max + i))
      }
      return getEchartsConfig_1(data_1, data_2)
    },
  })
  return {
    chartRef,
  }
}

export function useEcharts_2() {
  const chartRef = ref()
  useChart({
    chartId: 'chart_2-id',
    time: 5000,
    chartRef,
    beforeRender: () => {
      const data = ref<number[]>([])
      const len = date_1.length
      for (let i = 0; i < len; i++) {
        data.value.push(Math.round(Math.random() * 300))
      }
      return getEchartsConfig_2(data)
    },
  })
  return {
    chartRef,
  }
}

export function useEcharts_3() {
  const chartRef = ref()
  useChart({
    chartId: 'chart_3-id',
    time: 4000,
    chartRef,
    beforeRender: () => {
      const names = ['VPN', '交换机', '防火墙', 'WAF', '堡垒机']
      const data = ref<IOptions3[]>(
        names.map((o) => ({
          name: o,
          value: Math.round(Math.random() * 600),
        }))
      )
      return getEchartsConfig_3(data)
    },
  })
  return {
    chartRef,
  }
}

export function useEcharts_4() {
  const chartRef = ref()
  const { immediateRender } = useChart({
    chartId: 'chart_4-id',
    time: 3540,
    chartRef,
    beforeRender: () => {
      const data1 = ref<number[]>([])
      const data2 = ref<number[]>([])
      const len = date_1.length
      for (let i = 0; i < len; i++) {
        data1.value.push(Math.round(Math.random() * 600))
        data2.value.push(Math.round(Math.random() * 600 + i))
      }
      return getEchartsConfig_4(data1, data2)
    },
  })
  return {
    chartRef,
    immediateRender,
  }
}

export function useEcharts_5() {
  const chartRef = ref()
  const { immediateRender } = useChart({
    chartId: 'chart_5-id',
    time: 8000,
    chartRef,
    beforeRender: () => {
      const data = ref<number[]>([])
      const len = date_1.length
      for (let i = 0; i < len; i++) {
        data.value.push(Math.round(Math.random() * 600))
      }
      return getEchartsConfig_5(data)
    },
  })
  return {
    chartRef,
    immediateRender,
  }
}

export function useEcharts_6() {
  const chartRef = ref()
  const { immediateRender } = useChart({
    chartId: 'chart_6-id',
    time: 3000,
    chartRef,
    beforeRender: () => {
      return getEchartsConfig_6()
    },
  })
  return {
    chartRef,
    immediateRender,
  }
}

export function useEcharts_7() {
  const chartRef = ref()
  useChart({
    chartId: 'chart_7-id',
    time: 2000,
    chartRef,
    beforeRender: () => {
      return getEchartsConfig_7()
    },
  })
  return {
    chartRef,
  }
}
