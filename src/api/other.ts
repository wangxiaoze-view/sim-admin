import { http } from '~/src/utils'

const url = {
  getNoticeList: '/api/getNoticeList',
  getUserInfo: '/api/getUserInfo',
}

export interface INoticeDataType {
  name: string
  avthor: string
  title: string
  description: string
  tip: string
  tipClass: string
}
export interface INoticeType {
  title: string
  type: number
  data: Partial<INoticeDataType>[]
}
export function getNoticeListApi() {
  return http.get<INoticeType[]>(url.getNoticeList, {})
}
