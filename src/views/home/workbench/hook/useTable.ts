import { onMounted, ref } from 'vue'
import { getDynamicApi, getTotalDataApi } from '~/src/api/other'
import { useLoading } from '~/src/hooks'
import { settings } from '~/src/config'

const { loadingText: text } = settings

export function useTable() {
  const tableData = ref<any[]>([])
  const page = ref(1)
  const pageSize = ref(10)
  const total = ref(0)

  const dynamic = ref<any[]>([])
  const { loading, setLoading, loadingText } = useLoading(false, text)

  const getData = async () => {
    try {
      setLoading(true)
      const {
        success,
        context: { total: totalData, list },
      } = await getTotalDataApi(page.value, pageSize.value)
      if (!success) return
      total.value = totalData
      tableData.value = list
    } finally {
      setLoading(false)
    }
  }

  const changeTable = (currentPage: number, _pageSize: number) => {
    page.value = currentPage
    pageSize.value = _pageSize
    getData()
  }

  const getDynamic = async () => {
    const { success, context } = await getDynamicApi()
    if (!success) return
    dynamic.value = context
  }

  onMounted(() => {
    getData()
    getDynamic()
  })

  return {
    tableData,
    total,
    changeTable,
    loading,
    loadingText,
    dynamic,
  }
}
