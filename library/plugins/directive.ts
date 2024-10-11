import { App, DirectiveBinding } from 'vue'
import { throttle } from 'lodash-es'

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
      mounted(el) {
        el.querySelector('input') ? el.querySelector('input').focus() : el.focus()
      },
    })

    // 颜色，文本颜色或者图标颜色
    app.directive('color', {
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

    // TODO: 后期合并成一个？？？
    // 用户角色
    app.directive('role', {
      mounted(el, binding) {
        const { value } = binding
        const roles: string[] = []
        if (!roles.includes(value)) {
          el.parentNode.removeChild(el)
        }
      },
    })

    // 用户权限
    app.directive('permission', {
      mounted(el, binding) {
        const { value } = binding
        const permissions: string[] = []
        if (!permissions.includes(value)) {
          el.parentNode.removeChild(el)
        }
      },
    })
  },
}
