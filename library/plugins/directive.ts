import { ElTooltip, ElTooltipProps } from 'element-plus'
import { type App, DirectiveBinding, isVNode, nextTick } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { useDirectiveComponent, useUser } from '~/src/hooks'
import { isString, throttle, isArray } from 'lodash-es'
import { createRipple, removeRipple } from '~/src/utils'
import { $sim } from '~/library/plugins/element'

const { hasRole, hasPermission } = useUser()

function handlerFun({ value }: DirectiveBinding) {
  let time = 1000
  let elFn = null
  if (typeof value === 'function') {
    elFn = value
  } else if (typeof value === 'object') {
    time = value.time || 1000
    elFn = value.fn || (() => {})
  }
  return { time, elFn }
}

const ToolTip = useDirectiveComponent(
  ElTooltip,
  async (el: Element, binding: DirectiveBinding): Promise<Partial<ElTooltipProps>> => {
    const vNode = isVNode(binding.value) && (await renderToString(binding.value))
    return {
      content: isVNode(binding.value) ? vNode : binding.value,
      placement: binding.arg ?? 'top',
      virtualTriggering: true,
      virtualRef: el,
      effect: 'dark',
      trigger: 'hover',
      rawContent: true,
      disabled: binding.modifiers.disabled,
    }
  }
)

export default {
  install: (app: App<Element>) => {
    // 聚焦
    app.directive('focus', {
      mounted(el: HTMLElement) {
        nextTick(() => {
          const ele = el.querySelector('input') as HTMLElement
          if (ele) {
            ele.focus()
          } else {
            el.focus()
          }
        })
      },
    })

    // 颜色，文本颜色或者图标颜色
    app.directive('icon-color', {
      mounted(el, binding) {
        el.setAttribute('style', `color: ${binding.value}`)
        // el.style.color = `${binding.value} !important`
      },
    })

    /**
     * @description 自定义指令：节流 "v-throttle"
     * 节流分为俩种方式:
     * 方式1：v-throttle="fn"
     * 方式2：v-throttle="{ time: 1000, fn }"
     */
    app.directive('throttle', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const { time, elFn } = handlerFun(binding)
        const fn = throttle(elFn, time)
        el.addEventListener('click', fn)
      },
      beforeUnmount(el: HTMLElement, binding: DirectiveBinding) {
        const { time, elFn } = handlerFun(binding)
        const fn = throttle(elFn, time)
        el.addEventListener('click', fn)
      },
    })

    /**
     * @description 自定义指令：防抖 "v-debounce"
     * 节流分为俩种方式:
     * 方式1：v-debounce="fn"
     * 方式2：v-debounce="{ time: 1000, fn }"
     */
    app.directive('debounce', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const { time, elFn } = handlerFun(binding)
        let timer: any
        el.addEventListener('click', () => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            elFn()
          }, time)
        })
      },
    })

    // 用户角色
    app.directive('role', {
      mounted(el, binding) {
        const { value } = binding
        if (!hasRole(value)) el.remove()
      },
    })

    // 用户权限
    app.directive('permission', {
      mounted(el, binding) {
        const { value } = binding
        if (!hasPermission(value)) el.remove()
      },
    })

    /**
     * @description 创建水波纹
     */
    app.directive('ripple', {
      mounted(el: HTMLElement) {
        el.addEventListener('click', (e) => {
          removeRipple(el)
          createRipple(el, e)
        })
      },
      unmounted(el: HTMLElement) {
        removeRipple(el)
      },
    })

    /**
     * @description tooltip
     */
    app.directive('tooltip', ToolTip)

    /**
     * @description highlight
     */
    app.directive('highlight', {
      mounted(el, binding) {
        const hight: any = CSS.highlights
        const textNode = el.firstChild
        if (!hight) {
          return $sim.$simMessage('当前浏览器不支持 v-highlight', 'error')
        }
        hight.clear()
        const highlights = []
        for (let i = 0; i < 7; i++) {
          const colorHighlight: any = new Highlight()
          highlights.push(colorHighlight)
          hight.set(`rainbow-color-${i + 1}`, colorHighlight)
        }
        for (let i = 0; i < textNode.textContent.length; i++) {
          const range = new Range()
          range.setStart(textNode, i)
          range.setEnd(textNode, i + 1)
          highlights[i % 7].add(range)
        }
      },
    })

    /**
     * @description highlight-single
     */
    app.directive('highlight-single', {
      mounted(el, binding) {
        if (!isString(binding.value)) return
        const content = el.textContent.replace(/\s/g, '')
        const text = binding.value.replace(/\s/g, '')

        const isExit = content.indexOf(text) !== -1
        if (isExit) {
          const hight: any = CSS.highlights
          const textNode = el.firstChild
          const range = new Range()
          range.setStart(textNode, content.indexOf(text))
          range.setEnd(textNode, content.indexOf(text) + text.length)
          const colorHighlight: any = new Highlight()
          hight.set('rainbow-color-1', colorHighlight)
          colorHighlight.add(range)
        }
      },
    })

    /**
     * @description highlight-replace
     */
    app.directive('highlight-replace', {
      mounted(el, binding) {
        if (!isArray(binding.value)) return
        const content = el.textContent.replace(/\s/g, '')
        const text = binding.value[0].replace(/\s/g, '')
        const color = binding.value[1]
        const isExit = content.indexOf(text) !== -1
        if (isExit) {
          el.innerHTML = content.replace(text, `<span style="color: ${color}">${text}</span>`)
        }
      },
    })
  },
}
