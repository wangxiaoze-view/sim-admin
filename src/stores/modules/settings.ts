import { theme as defaultTheme, cache as cacheConfig } from '~/src/config'
import { useComputedNum } from '~/src/hooks'
import { hexToRgba } from '~/src/utils'
import { useCssVar } from '@vueuse/core'

// Element Plus 主题色变量前缀
const EL_COLOR_PRIMARY_PREFIX = '--el-color-primary'
// VXE Table 主题色变量
const VXE_COLOR_VARS = [
  '--vxe-primary-color',
  '--vxe-primary-darken-color',
  '--vxe-primary-lighten-color',
] as const
// 最大透明度级别
const MAX_OPACITY_LEVEL = 9

export const useSettingsStore = defineStore('settings', {
  state: (): ISettingsType => {
    const cachedTheme = localStorage.getItem(cacheConfig.cache_theme)
    const parsedTheme = cachedTheme ? (JSON.parse(cachedTheme) as Partial<ITheme>) : {}
    return {
      theme: { ...defaultTheme, ...parsedTheme } as ITheme,
    }
  },
  getters: {
    getTheme: (state) => state.theme,
    getLanguage: (state) => state.theme.i18n,
  },
  actions: {
    /**
     * 重置主题为默认配置
     */
    resetTheme() {
      this.theme = { ...defaultTheme } as ITheme
      this.setTheme(this.theme)
    },
    /**
     * 设置主题配置
     * @param theme 主题配置（部分更新）
     */
    setTheme(theme?: Partial<ITheme>) {
      this.theme = { ...this.theme, ...theme }
      // 浮动布局时强制折叠菜单
      if (this.theme.layout === 'float') {
        this.theme.collapse = true
      }
      localStorage.setItem(cacheConfig.cache_theme, JSON.stringify(this.theme))
    },
    /**
     * 更改主题颜色
     * 更新 Element Plus 和 VXE Table 的主题色变量
     */
    changePrimaryColor() {
      const { toNumber } = useComputedNum()
      const el = ref<HTMLElement | null>(null)
      const { themeColor } = this.theme

      // 设置 Element Plus 主色和暗色
      const primaryCssVar = useCssVar(`${EL_COLOR_PRIMARY_PREFIX}`, el)
      const darkCssVar = useCssVar(`${EL_COLOR_PRIMARY_PREFIX}-dark-2`, el)
      primaryCssVar.value = darkCssVar.value = themeColor

      // 设置 Element Plus 主色透明度变体（light-1 到 light-9）
      for (let i = 1; i <= MAX_OPACITY_LEVEL; i++) {
        const opacity = toNumber(1 - i * 0.1)
        const color = hexToRgba(themeColor, opacity)
        if (color) {
          useCssVar(`${EL_COLOR_PRIMARY_PREFIX}-light-${i}`, el).value = color
        }
      }

      // 设置 VXE Table 主题色
      VXE_COLOR_VARS.forEach((varName) => {
        useCssVar(varName, el).value = themeColor
      })

      // 设置页面滤镜效果（色弱模式/灰色模式，两种模式互斥）
      this.applyBodyFilter()
    },
    /**
     * 应用页面滤镜效果
     * 色弱模式和灰色模式只能二选一
     */
    applyBodyFilter() {
      const { colorWeakness, colorGray } = this.theme
      const body = document.body

      if (colorWeakness && !colorGray) {
        // 色弱模式
        body.style.filter = 'invert(80%)'
      } else if (colorGray && !colorWeakness) {
        // 灰色模式/纪念模式
        body.style.filter = 'grayscale(100%)'
      } else {
        // 清除滤镜
        body.style.filter = ''
      }
    },
    /**
     * 设置语言
     * @param language 语言类型
     */
    changeLanguage(language: TLanguageType) {
      this.setTheme({ i18n: language })
    },
  },
})
