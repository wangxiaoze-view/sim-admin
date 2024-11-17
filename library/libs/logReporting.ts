import { useReport } from '~/src/hooks'

export default function setupLogReporting() {
  const { initLogReporting } = useReport()
  initLogReporting()
}
