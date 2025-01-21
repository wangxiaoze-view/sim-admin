import * as Icons from '@remixicon/vue'
import { Component, markRaw, ref } from 'vue'
import { useChangeTheme } from '..'
export function useIcon(page?: number, size?: number) {
  const currentPage = ref(page ?? 1)
  const pageSize = ref(size ?? 100)
  const icons = ref<Component[]>([])
  const colors = ref<string[]>(onRandomColor())

  const formModel = ref({
    isColor: false,
    fontSize: 24,
  })

  const { getTheme } = useChangeTheme()

  function onInitIcons() {
    return Object.entries(Icons).map(([key, value]) => markRaw(value))
  }

  // 随机颜色 根据 参数 index生成随机颜色
  function onGenerateRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }
  function onRandomColor() {
    const colors = []
    for (let i = 0; i < pageSize.value; i++) {
      colors.push(onGenerateRandomColor())
    }
    return colors
  }

  function onPaginateArray(array: any[], pageSize: number, pageNumber: number) {
    // pageNumber 从 1 开始计数
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize
    return array.slice(startIndex, endIndex)
  }

  function onChangePage(_currentPage: number, _pageSize: number) {
    currentPage.value = _currentPage
    pageSize.value = _pageSize
    icons.value = onPaginateArray(onInitIcons(), pageSize.value, currentPage.value)
    colors.value = onRandomColor()
  }

  onChangePage(currentPage.value, pageSize.value)

  return {
    colors,
    getTheme,
    formModel,
    icons,
    currentPage,
    pageSize,
    onChangePage,
    onInitIcons,
    onRandomColor,
  }
}
