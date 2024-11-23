import { http } from '~/src/utils'

const url = {
  getNoticeList: '/api/getNoticeList',
  getUserInfo: '/api/getUserInfo',
  getTotalData: '/api/getTotalData',
  getDynamic: '/api/getDynamic',
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

export interface ITotalDataType {
  id: number
  name: string
  avatar: string
  email: string
  status: number
  createTime: string
  updateTime: string
  address: string
}
export interface IPageType {
  total: number
  page: number
  pageSize: number
  list: ITotalDataType[]
}
export function getTotalDataApi(page: number, pageSize: number) {
  return http.get<IPageType>(url.getTotalData, {
    params: { page, pageSize },
  })
}

export interface IDynamicType {
  name: string
  avatar: string
  title: string
  description: number
  color: string
  week: string
  date: string
}

export function getDynamicApi() {
  return http.get<IDynamicType[]>(url.getDynamic, {})
}
