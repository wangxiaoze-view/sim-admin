import { Ref, nextTick, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import * as echarts from 'echarts'
import SimChart from '~/src/components/SimEcharts/index.vue'
import { isFunction, logger } from '~/src/utils'
import { useDebounceFn } from '..'

type TEChartsOption = echarts.EChartsOption | Record<string, unknown>

interface IChartConfig {
  // 图表的 ID
  chartId: string
  // 图表的引用
  chartRef: Ref<InstanceType<typeof SimChart>>
  // 渲染前需要处理的数据
  beforeRender: () => TEChartsOption
  time?: number
}

// 针对于echarts的配置业务场景
export function useChart<T>(options: IChartConfig) {
  const { chartId, time = 3000, beforeRender, chartRef } = options

  let startTime = 0

  // 图表实例
  let chart: echarts.ECharts

  const initChart = () => {
    nextTick(() => {
      getInstance()
      renderChartConfig()
    })
  }

  /**
   * @description：返回ECharts实例，如果尚未初始化则初始化。
   * @return {echarts.ECharts} ECharts实例
   */
  const getInstance = (): echarts.ECharts => {
    if (!chartId) {
      logger.error('chartId is required')
      return chart
    }
    chartRef.value?.setChartId(chartId)

    if (!chart) {
      chart = echarts.init(chartRef.value!.$el as HTMLElement)
    }
    return chart
  }

  /**
   * @description: 设置图表数据。
   * @param {TEChartsOption} options -可选的图表选项，用于覆盖 beforeRender 中的选项。
   */
  const setChartData = (options: TEChartsOption) => {
    resizeChart()
    getInstance().setOption(options)
  }

  /**
   * @description: 调整图表的大小。
   * @remark: 如果你使用了自适应布局，需要在布局变化后调用这个函数，例如在浏览器窗口大小变化时。
   */
  const resizeChart = () => {
    getInstance().resize()
  }

  /**
   * @description: 清除图表数据。
   * @remark: 调用此函数可清空当前图表的所有数据和状态。
   */
  const clearChart = () => {
    getInstance().clear()
  }

  /**
   * @description：AnimationFrame 请求AnimationFrame 包装器。
   * @param {() => void} callback -要调用的回调函数。
   * @returns {void}
   */
  const animationFrame = (callback: () => void): void => {
    if (!isFunction(callback)) return
    requestAnimationFrame(callback)
  }

  /**
   * @description: 渲染图表数据。
   * @remark: 如果传入了immediateRender参数，且immediateRender为true，那么将立即渲染数据，不进行定时处理。
   * @returns {void}
   */
  const renderChartConfig = (): void => {
    const endTime = Date.now()
    if (endTime - startTime >= time) {
      immediateRender()
      startTime = endTime
    }
    animationFrame(renderChartConfig)
  }

  /**
   * @description: 立即渲染图表数据。
   * @remark: 该函数将根据beforeRender函数的返回值来设置图表数据。
   *          如果beforeRender函数的返回值为undefined，那么将不进行图表数据的设置。
   * @returns {void}
   */
  const immediateRender = (): void => {
    setChartData(beforeRender() ?? {})
  }

  onMounted(initChart)

  const debounceFn = useDebounceFn(resizeChart, 3)
  onBeforeMount(() => {
    window.addEventListener('resize', debounceFn)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounceFn)
  })

  return {
    SimChart,
    chartId,
    chartRef,
    getInstance,
    setChartData,
    resizeChart,
    clearChart,
    animationFrame,
    renderChartConfig,
    immediateRender,
  }
}
