import { defineMock, MockOptions } from 'rspack-plugin-mock/helper'
import { Random, mock } from 'mockjs'

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
    url: '/getNoticeList',
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
  {
    url: '/getTotalData',
    delay: 1500,
    response(req: any, res: any) {
      const count = 50
      const data = mock({
        'list|10': [
          {
            'id|+1': 1,
            name: '@cname',
            'avatar|1': [
              'https://picsum.photos/50/50?random=1',
              'https://picsum.photos/50/50?random=2',
            ],
            'email|1': ['@email', '-'],
            'status|1': ['0', '1'],
            'createTime|1': ['@datetime', '-'],
            'updateTime|1': ['@datetime', '-'],
            'address|1': ['@county(true)', '-'],
          },
        ],
      })
      const page = req.query.page || 1
      const pageSize = req.query.pageSize || 10

      res.end(
        JSON.stringify({
          code: 200,
          message: 'success',
          success: true,
          context: {
            total: count,
            ...data,
            page,
            pageSize,
          },
        })
      )
    },
  },
  {
    url: '/getDynamic',
    response(req: any, res: any) {
      const data = []
      for (let i = 0; i < 15; i++) {
        data.push({
          name: Random.cname(),
          avthor: `https://picsum.photos/50/50?random=${Random.guid()}`,
          title: Random.cname(),
          description: Random.cparagraph(1, 3),
          color: Random.color(),
          week: Random.natural(1, 7),
          date: Random.date(),
        })
      }
      res.end(
        JSON.stringify({
          code: 200,
          message: 'success',
          success: true,
          context: data,
        })
      )
    },
  },
])
