import * as echarts from 'echarts'
import SimChart from '~/src/components/SimEcharts/index.vue'
import { useDebounceFn } from '@vueuse/core'

type TEChartsOption = echarts.EChartsOption | Record<string, unknown>

interface IChartConfig {
  /** 图表的 ID */
  chartId: string
  /** 图表的引用 */
  chartRef: Ref<InstanceType<typeof SimChart>>
  /** 渲染前需要处理的数据 */
  beforeRender: () => TEChartsOption
  /** 渲染间隔时间（毫秒），默认 3000ms */
  time?: number
}

/**
 * ECharts 图表 Hook
 * 提供图表的初始化、数据更新、大小调整等功能
 * @param options 图表配置选项
 * @returns 图表操作方法集合
 */
export function useChart(options: IChartConfig) {
  const { chartId, time = 3000, beforeRender, chartRef } = options

  let startTime = 0
  let chart: echarts.ECharts | null = null
  let animationFrameId: number | null = null

  /**
   * 获取或初始化 ECharts 实例
   * @returns ECharts 实例
   */
  const getInstance = (): echarts.ECharts => {
    if (!chartId) {
      console.error('chartId is required')
      throw new Error('chartId is required')
    }

    if (!chartRef.value) {
      console.error('chartRef is not available')
      throw new Error('chartRef is not available')
    }

    chartRef.value.setChartId(chartId)

    if (!chart) {
      const el = chartRef.value.$el as HTMLElement
      if (!el) {
        console.error('Chart element is not available')
        throw new Error('Chart element is not available')
      }
      chart = echarts.init(el)
    }

    return chart
  }

  /**
   * 设置图表数据
   * @param options 图表配置选项
   */
  const setChartData = (options: TEChartsOption): void => {
    if (!chart) return
    chart.setOption(options)
    resizeChart()
  }

  /**
   * 调整图表大小
   * 适用于窗口大小变化或布局变化时调用
   */
  const resizeChart = (): void => {
    if (!chart) return
    chart.resize()
  }

  /**
   * 清除图表数据
   */
  const clearChart = (): void => {
    if (!chart) return
    chart.clear()
  }

  /**
   * 立即渲染图表数据
   */
  const immediateRender = (): void => {
    const options = beforeRender()
    if (options) {
      setChartData(options)
    }
  }

  /**
   * 渲染图表配置（定时渲染）
   * 根据配置的时间间隔自动更新图表数据
   */
  const renderChartConfig = (): void => {
    const endTime = Date.now()
    if (endTime - startTime >= time) {
      immediateRender()
      startTime = endTime
    }
    animationFrameId = requestAnimationFrame(renderChartConfig)
  }

  /**
   * 停止自动渲染
   */
  const stopAutoRender = (): void => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }

  /**
   * 初始化图表
   */
  const initChart = (): void => {
    nextTick(() => {
      try {
        getInstance()
        startTime = Date.now()
        renderChartConfig()
      } catch (error) {
        console.error('Failed to initialize chart:', String(error))
      }
    })
  }

  /**
   * 销毁图表实例
   */
  const disposeChart = (): void => {
    stopAutoRender()
    if (chart) {
      chart.dispose()
      chart = null
    }
  }

  // 防抖处理窗口大小变化
  const debounceResize = useDebounceFn(resizeChart, 300)

  // 注册生命周期钩子
  onBeforeMount(() => {
    window.addEventListener('resize', debounceResize)
  })

  onMounted(initChart)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounceResize)
    disposeChart()
  })

  return {
    /** SimChart 组件 */
    SimChart,
    /** 图表 ID */
    chartId,
    /** 图表引用 */
    chartRef,
    /** 获取图表实例 */
    getInstance,
    /** 设置图表数据 */
    setChartData,
    /** 调整图表大小 */
    resizeChart,
    /** 清除图表数据 */
    clearChart,
    /** 立即渲染图表 */
    immediateRender,
    /** 开始自动渲染 */
    renderChartConfig,
    /** 停止自动渲染 */
    stopAutoRender,
    /** 销毁图表 */
    disposeChart,
  }
}
