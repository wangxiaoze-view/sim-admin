import { type App, DirectiveBinding } from 'vue'
import { useUser } from '~/src/hooks'
import { throttle } from '~/src/utils'
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

export default {
  install: (app: App<Element>) => {
    // 聚焦
    app.directive('focus', {
      mounted(el: HTMLElement) {
        const ele = el.querySelector('input') as HTMLElement
        if (ele) {
          ele.focus()
        } else {
          el.focus()
        }
      },
    })

    // 颜色，文本颜色或者图标颜色
    app.directive('icon-color', {
      mounted(el, binding) {
        el.style.color = binding.value
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
  },
}
