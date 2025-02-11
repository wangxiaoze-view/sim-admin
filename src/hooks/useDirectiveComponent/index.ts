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
type TProps = (el: Element, binding: DirectiveBinding) => Record<string, any> | Record<string, any>

function mountComponent(component: TComponent, props: TProps) {
  return async (el: Element, binding: DirectiveBinding) => {
    const _props = isFunction(props) ? await props(el, binding) : props
    const value = isObject(binding.value) ? binding.value : ({} as DirectiveBinding['value'])
    const children = () => binding.value ?? el.textContent
    const node = h(component, mergeProps(_props, value), children)
    render(node, el)
  }
}

export function useDirectiveComponent(component: TComponent, props: TProps): Directive {
  const reloveComponent = isString(component) ? resolveComponent(component) : component
  const hook = mountComponent(reloveComponent, props)
  return {
    mounted: hook,
    updated: hook,
    unmounted(el) {
      render(null, el)
    },
  }
}
