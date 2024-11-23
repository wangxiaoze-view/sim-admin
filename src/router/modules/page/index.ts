export const pageRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/page',
    name: 'Page',
    component: import('~/library/layouts/index.vue'),
    meta: {
      title: '页面',
      icon: 'ri-article-line',
    },
    children: [
      {
        path: 'form',
        name: 'PageForm',
        component: () => import('~/src/views/page/form/index.vue'),
        meta: {
          title: '表单',
          icon: 'ri-survey-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'result',
        name: 'PageResult',
        component: () => import('~/src/views/page/result/index.vue'),
        meta: {
          title: '结果',
          icon: 'ri-equal-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
]
