import type { FormInstance, FormItemProp, FormRules, FormValidateCallback } from 'element-plus'
import type { Arrayable } from 'element-plus/lib/utils/typescript.js'
import { ref, unref } from 'vue'

/**
 * @description 表单的hooks
 * @param rulesConfig 表单的规则
 * @returns 返回表单的ref
 */
export function useForm(rulesConfig: any) {
  /**
   * @description 表单的ref
   */
  const formRef = ref<FormInstance>()

  /**
   * @description 表单的规则, 由于业务场景不一致，所以这里需要动态传入自定义
   */
  const rules = ref<FormRules>(unref(rulesConfig || {}))

  /**
   * @description 表单验证
   * @param callback @abstract 回调
   */
  const validate = (callback?: (valid: boolean) => void) => {
    formRef.value?.validate(callback)
  }

  /**
   * @description 验证具体的某个字段
   * @param props @abstract props
   * @param callback @abstract 回调
   */
  const validateField = (
    props?: Arrayable<FormItemProp> | undefined,
    callback?: FormValidateCallback | undefined
  ) => {
    formRef.value?.validateField(props, callback)
  }

  /**
   * @description 重置该表单项，将其值重置为初始值，并移除校验结果
   * @param props @abstract props
   */
  const resetFields = (props?: Arrayable<FormItemProp> | undefined) => {
    formRef.value?.resetFields(props)
  }

  /**
   * @description 滚动到指定的字段
   * @param prop @abstract prop
   */
  const scrollToField = (prop: FormItemProp) => {
    formRef.value?.scrollToField(prop)
  }

  /**
   * @description 清理某个字段的表单验证信息。
   * @param props @abstract props
   */
  const clearValidate = (props?: Arrayable<FormItemProp> | undefined) => {
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
