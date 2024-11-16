import { App } from 'vue'
import SimLayoutOrdinary from './SimLayoutOrdinary/index.vue'
import SimLayoutFloat from './SimLayoutFloat/index.vue'
import SimLayoutRow from './SimLayoutRow/index.vue'

// TODO: 循环目录?
export default function setiupLayout(app: App<Element>) {
  ;[SimLayoutOrdinary, SimLayoutFloat, SimLayoutRow].forEach((component) => {
    app.component(component.name as string, component)
  })
}
