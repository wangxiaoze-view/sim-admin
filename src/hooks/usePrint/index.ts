import printJS from 'print-js'

type TPrintOptions = printJS.Configuration
export function usePrint() {
  const onPrint = (configuration: TPrintOptions) => {
    printJS({
      ...configuration,
    } as TPrintOptions)
  }

  const onSysPrint = (container = window) => {
    container.print()
  }

  return {
    onPrint,
    onSysPrint,
  }
}
