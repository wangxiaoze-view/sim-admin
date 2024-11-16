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
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '表单',
          icon: 'ri-survey-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'result',
        name: 'PageResult',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '结果',
          icon: 'ri-equal-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'error',
        name: 'PageError',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '错误',
          icon: 'ri-bug-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'list',
        name: 'PageList',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '列表',
          icon: 'ri-list-radio',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
]
