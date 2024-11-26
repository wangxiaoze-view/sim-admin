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

export interface IDynamicType {
  name: string
  avatar: string
  title: string
  description: number
  color: string
  week: string
  date: string
}
