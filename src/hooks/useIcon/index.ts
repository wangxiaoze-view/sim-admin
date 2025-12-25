import * as Icons from '@remixicon/vue'
import { Component, markRaw } from 'vue'
import { useChangeTheme } from '..'

/**
 * 图标管理 Hook
 * 提供图标列表、分页、颜色等功能
 * @param page 初始页码，默认为 1
 * @param size 每页显示数量，默认为 100
 * @returns 图标相关方法和数据
 */
export function useIcon(page?: number, size?: number) {
  const currentPage = ref(page ?? 1)
  const pageSize = ref(size ?? 100)
  const icons = ref<Component[]>([])
  const colors = ref<string[]>([])

  const formModel = ref({
    isColor: false,
    fontSize: 24,
  })

  const { getTheme } = useChangeTheme()

  /**
   * 初始化图标列表
   * @returns 图标组件数组
   */
  function onInitIcons(): Component[] {
    return Object.entries(Icons).map(([, value]) => markRaw(value))
  }

  /**
   * 生成随机颜色
   * @returns RGB 颜色字符串
   */
  function onGenerateRandomColor(): string {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }

  /**
   * 生成随机颜色数组
   * @returns 颜色数组
   */
  function onRandomColor(): string[] {
    const colorArray: string[] = []
    for (let i = 0; i < pageSize.value; i++) {
      colorArray.push(onGenerateRandomColor())
    }
    return colorArray
  }

  /**
   * 数组分页
   * @param array 要分页的数组
   * @param pageSize 每页大小
   * @param pageNumber 页码（从 1 开始）
   * @returns 分页后的数组
   */
  function onPaginateArray<T>(array: T[], pageSize: number, pageNumber: number): T[] {
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize
    return array.slice(startIndex, endIndex)
  }

  /**
   * 切换页码
   * @param _currentPage 当前页码
   * @param _pageSize 每页大小
   */
  function onChangePage(_currentPage: number, _pageSize: number): void {
    currentPage.value = _currentPage
    pageSize.value = _pageSize
    icons.value = onPaginateArray(onInitIcons(), pageSize.value, currentPage.value)
    colors.value = onRandomColor()
  }

  // 初始化
  onChangePage(currentPage.value, pageSize.value)

  return {
    /** 颜色数组（响应式） */
    colors,
    /** 当前主题配置（响应式） */
    getTheme,
    /** 表单模型（响应式） */
    formModel,
    /** 图标组件数组（响应式） */
    icons,
    /** 当前页码（响应式） */
    currentPage,
    /** 每页大小（响应式） */
    pageSize,
    /** 切换页码 */
    onChangePage,
    /** 初始化图标列表 */
    onInitIcons,
    /** 生成随机颜色数组 */
    onRandomColor,
  }
}
