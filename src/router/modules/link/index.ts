export const linkRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/link',
    name: 'Link',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '外链',
      icon: 'ri-link-unlink-m',
    },
    children: [
      {
        path: 'knowledge',
        name: 'LinkKnowledge',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '知识库',
          icon: 'ri-empathize-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'https://cn.vuejs.org/',
        name: 'LinkVue',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: 'Vue',
          icon: 'ri-vuejs-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
]
