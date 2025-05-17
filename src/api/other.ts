import { http } from '~/src/utils'
import { IDynamicType, INoticeType, IPageType } from './types'

const url = {
  getNoticeList: '/getNoticeList',
  getUserInfo: '/getUserInfo',
  getTotalData: '/getTotalData',
  getDynamic: '/getDynamic',
}

export function getNoticeListApi() {
  return http.get<INoticeType[]>(url.getNoticeList, {})
}

export function getTotalDataApi(page: number, pageSize: number) {
  return http.get<IPageType>(url.getTotalData, {
    params: { page, pageSize },
  })
}

export function getDynamicApi() {
  return http.get<IDynamicType[]>(url.getDynamic, {})
}
