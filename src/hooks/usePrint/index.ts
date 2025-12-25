import printJS from 'print-js'
import type { Configuration } from 'print-js'

type TPrintOptions = Configuration

/**
 * 打印 Hook
 * 提供打印功能，支持使用 print-js 或系统打印
 * @returns 打印方法集合
 */
export function usePrint() {
  /**
   * 使用 print-js 打印
   * @param configuration 打印配置选项
   */
  const onPrint = (configuration: TPrintOptions): void => {
    printJS(configuration)
  }

  /**
   * 使用系统打印对话框打印
   * @param container 要打印的容器，默认为 window
   */
  const onSysPrint = (container: Window | HTMLElement = window): void => {
    if (container instanceof Window) {
      container.print()
    } else {
      // 对于 HTMLElement，需要打开新窗口打印
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(container.innerHTML)
        printWindow.document.close()
        printWindow.print()
      }
    }
  }

  return {
    /** 使用 print-js 打印 */
    onPrint,
    /** 使用系统打印对话框 */
    onSysPrint,
  }
}
