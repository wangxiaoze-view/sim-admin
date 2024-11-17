import { defineMock } from 'rspack-plugin-mock/helper'
import { Random } from 'mockjs'

const mockNoticeData = [
  {
    // 通知
    title: '通知',
    type: 1,
    data: [],
  },
  {
    // 消息
    title: '消息',
    type: 2,
    data: [
      {
        name: Random.cname(),
        avthor: `https://picsum.photos/50/50?random=${Random.guid()}`,
        title: Random.cname(),
        description: Random.paragraph(),
      },
    ],
  },
  {
    // 待办
    title: '待办',
    type: 3,
    data: [
      {
        title: Random.cname(),
        description: Random.paragraph(),
        tip: '已到期',
        tipClass: 'out',
      },
      {
        title: Random.cname(),
        description: Random.paragraph(),
        tip: '进行中',
        tipClass: 'ing',
      },
      {
        title: Random.cname(),
        description: Random.paragraph(),
        tip: '未开始',
        tipClass: 'todo',
      },
    ],
  },
]
export default defineMock([
  {
    url: '/api/getNoticeList',
    response(_, res) {
      res.end(
        JSON.stringify({
          code: 200,
          message: 'success',
          success: true,
          context: mockNoticeData,
        })
      )
    },
  },
])
