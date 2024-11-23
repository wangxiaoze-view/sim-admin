export const threeRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/three',
    name: 'ThreePage',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: 'Three',
      icon: 'ri-criminal-line',
    },
    children: [
      {
        path: 'object',
        name: 'ThreeObject',
        component: () => import('~/src/views/3D/object/index.vue'),
        meta: {
          title: '物体',
          icon: 'ri-global-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'models',
        name: 'ThreeModels',
        component: () => import('~/src/views/3D/models/index.vue'),
        meta: {
          title: '模型',
          icon: 'ri-vip-diamond-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'stickers',
        name: 'ThreeStickers',
        component: () => import('~/src/views/3D/stickers/index.vue'),
        meta: {
          title: '贴图',
          icon: 'ri-image-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
]
