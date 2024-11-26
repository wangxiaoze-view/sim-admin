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
        component: () => import('~/src/views/iframe/index.vue'),
        meta: {
          title: '知识库',
          icon: 'ri-empathize-line',
          iframePath: 'https://www.wangzevw.com',
          roles: ['Admin', 'User', 'Test'],
        },
      },

      {
        path: '3D',
        name: '3D',
        component: () => import('~/src/views/iframe/index.vue'),
        meta: {
          title: '3D',
          icon: 'ri-criminal-line',
          iframePath: 'https://www.wangzevw.com/demos/3d/models/common.html',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'https://cn.vuejs.org/',
        name: 'LinkVue',
        meta: {
          title: 'Vue',
          target: '_blank',
          icon: 'ri-vuejs-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
]
