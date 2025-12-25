import {
  DirectiveBinding,
  h,
  mergeProps,
  render,
  resolveComponent,
  type Component,
  type Directive,
} from 'vue'
import { isFunction, isObject, isString } from 'lodash-es'

type TComponent = Component | string
type TProps =
  | ((
      el: Element,
      binding: DirectiveBinding
    ) => Record<string, unknown> | Promise<Record<string, unknown>>)
  | Record<string, unknown>

/**
 * 挂载组件到元素
 * @param component 组件
 * @param props 属性配置
 * @returns 挂载函数
 */
function mountComponent(component: TComponent, props: TProps) {
  return async (el: Element, binding: DirectiveBinding): Promise<void> => {
    const _props = isFunction(props) ? await props(el, binding) : props
    const value = isObject(binding.value) ? binding.value : ({} as DirectiveBinding['value'])
    const children = () => binding.value ?? el.textContent
    const node = h(component, mergeProps(_props, value), children)
    render(node, el)
  }
}

/**
 * 指令组件 Hook
 * 将 Vue 组件作为指令使用
 * @param component 组件或组件名称
 * @param props 属性配置（可以是函数或对象）
 * @returns 指令对象
 */
export function useDirectiveComponent(component: TComponent, props: TProps): Directive {
  const resolvedComponent = isString(component) ? resolveComponent(component) : component
  const hook = mountComponent(resolvedComponent, props)

  return {
    /** 挂载组件 */
    mounted: hook,
    /** 更新组件 */
    updated: hook,
    /** 卸载组件 */
    unmounted(el: Element): void {
      render(null, el)
    },
  }
}
