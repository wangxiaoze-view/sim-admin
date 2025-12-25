import mitt from 'mitt'
export function useMitt() {
  const emitter = mitt()

  const simEmit = (event: string, ...args: any[]) => {
    emitter.emit(event, args)
  }

  const simEmitOn = (event: string, callback: (...args: any[]) => void) => {
    emitter.on(event, callback)
  }

  const simEmitOff = (event: string, callback: (...args: any[]) => void) => {
    emitter.off(event, callback)
  }

  const simEmitClear = () => {
    emitter.all.clear()
  }

  return {
    emitter,
    simEmit,
    simEmitOn,
    simEmitOff,
    simEmitClear,
  }
}
