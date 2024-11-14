import { ElMessageBox } from 'element-plus'
import { version, name } from '~/package.json'
import setupLogReporting from '../libs/logReporting'

export default {
  install: () => {
    // @ts-expect-error TS2339
    const isSupport = !!window.ActiveXObject || 'ActiveXObject' in window

    if (isSupport) {
      ElMessageBox({
        title: 'Sim提醒',
        message:
          '哎呦喂! 您怎么还在使用IE浏览器呢~ 要想发挥系统的极致，请<a target="_blank" style="color:blue" href="https://www.google.com/intl/zh-CN/chrome/">点击此处</a>下载谷歌浏览器',
        type: 'warning',
        showClose: false,
        showConfirmButton: false,
        closeOnClickModal: false,
        closeOnPressEscape: false,
        closeOnHashChange: false,
        dangerouslyUseHTMLString: true,
      }).then(() => {})
    }

    console.log(
      ` %c ${name}(v${version}) %c 欢迎使用！附带日志上报系统! `,
      'color: #ffffff; background: #0081ff; padding:2px 0; border-radius: 3px 0 0 3px;',
      'color: #ffffff; background: #354855; padding:2px 0; border-radius: 0 3px 3px 0;'
    )
    // TODO: 暂时去掉
    // setupLogReporting()
  },
}
