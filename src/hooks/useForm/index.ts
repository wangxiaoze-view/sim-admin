import type { FormInstance, FormItemProp, FormRules, FormValidateCallback } from 'element-plus'
import type { Arrayable } from 'element-plus/lib/utils/typescript.js'

/**
 * 表单 Hook
 * 提供表单验证、重置等常用功能
 * @param rulesConfig 表单验证规则配置
 * @returns 表单相关方法和引用
 */
export function useForm(rulesConfig?: FormRules | (() => FormRules)) {
  /** 表单实例引用 */
  const formRef = ref<FormInstance>()

  /** 表单验证规则（响应式） */
  const rules = ref<FormRules>(
    typeof rulesConfig === 'function' ? rulesConfig() : rulesConfig || {}
  )

  /**
   * 验证整个表单
   * @param callback 验证完成后的回调函数
   */
  const validate = (callback?: (valid: boolean) => void): void => {
    formRef.value?.validate(callback)
  }

  /**
   * 验证指定字段
   * @param props 要验证的字段属性
   * @param callback 验证完成后的回调函数
   */
  const validateField = (
    props?: Arrayable<FormItemProp>,
    callback?: FormValidateCallback
  ): void => {
    formRef.value?.validateField(props, callback)
  }

  /**
   * 重置表单字段
   * 将字段值重置为初始值，并移除校验结果
   * @param props 要重置的字段属性，不传则重置所有字段
   */
  const resetFields = (props?: Arrayable<FormItemProp>): void => {
    formRef.value?.resetFields(props)
  }

  /**
   * 滚动到指定字段
   * @param prop 字段属性
   */
  const scrollToField = (prop: FormItemProp): void => {
    formRef.value?.scrollToField(prop)
  }

  /**
   * 清除指定字段的验证信息
   * @param props 要清除验证的字段属性，不传则清除所有字段
   */
  const clearValidate = (props?: Arrayable<FormItemProp>): void => {
    formRef.value?.clearValidate(props)
  }

  return {
    formRef,
    rules,
    validate,
    validateField,
    resetFields,
    scrollToField,
    clearValidate,
  }
}
