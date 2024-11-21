import * as echarts from 'echarts'
import { onBeforeMount, onBeforeUnmount, ref, unref, nextTick } from 'vue'
import { useDebounceFn } from '..'

export function useChart() {
  let chart: any
  const chartId = ref('')
  const chartOptions = ref({})

  const initChart = (id: string, options: Record<string, any>) => {
    chartId.value = id
    chartOptions.value = options
    nextTick(setChartData)
  }

  const chartIntance = () => {
    if (!chart) {
      chart = echarts.init(document.getElementById(chartId.value) as HTMLElement)
    }
    return chart
  }

  const setChartData = (options?: Record<string, any>) => {
    resizeChart()
    chartIntance().setOption({ ...chartOptions.value, ...(options ?? {}) })
  }

  const resizeChart = () => {
    chartIntance().resize()
  }

  const clearEchartsData = () => {
    chartIntance().clear()
  }

  const debounceFn = useDebounceFn(resizeChart, 100)
  onBeforeMount(() => {
    window.addEventListener('resize', debounceFn)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounceFn)
  })

  return {
    chartId,
    initChart,
    setChartData,
    resizeChart,
    chartIntance,
    clearEchartsData,
  }
}
