import currency from 'currency.js'

interface IResult {
  number: number
  string: string
}

type TType = 'add' | 'subtract' | 'multiply' | 'divide'
/**
 * @description 金额，数字计算
 * @returns
 */
export function useComputedNum() {
  /**
   * 对两个数字执行算术运算。
   *
   * @param {TType} type -要执行的算术运算的类型：“加”、“减”、“乘”或“除”。
   * @param {string | number} a -第一个操作数可以是字符串或数字。
   * @param {string | number} [b=0] -第二个操作数可以是字符串或数字。如果未提供，则默认为 0。
   * @returns {IResult} 包含数字和字符串形式的运算结果的对象。
   */
  const arithmetic = (type: TType, a: string | number, b?: string | number): IResult => {
    const result = currency(a)[type](b || 0)
    return { number: result.value, string: result.toString() }
  }

  /**
   * @description 将数字或字符串转换为货币格式的字符串
   * @param {string | number} value -要转换的数字或字符串
   * @returns {string} 货币格式的字符串
   */
  const toString = (value: string | number) => {
    return currency(value).toString()
  }

  /**
   * @description 将数字或字符串转换为数字
   * @param {string | number} value -要转换的数字或字符串
   * @returns {number} 转换后的数字
   */
  const toNumber = (value: string | number) => {
    return currency(value).value
  }
  /**
   * @description 根据提供的选项将数字或字符串转换为Currency对象。参见 {@link https://github.com/scurker/currency.js}
   * @param {string | number} value -要转换的数字或字符串
   * @param {Partial<ICurrencyOptions>} [options={}] -CurrencyJs的选项
   * @returns {Currency} 转换后的Currency对象
   */
  const custom = (value: string | number, options = {}) => {
    return currency(value, options)
  }

  return {
    arithmetic,
    toString,
    toNumber,
    custom,
  }
}
