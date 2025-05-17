export default [
  {
    path: '/link',
    name: 'Link',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '外链',
      icon: 'ri-link-unlink-m',
      sort: 6,
    },
    children: [
      {
        path: 'my',
        name: 'My',
        component: () => import('~/src/views/iframe/index.vue'),
        meta: {
          title: '我的主页',
          icon: 'ri-product-hunt-line',
          iframePath: 'https://www.wangxiaoze.cn',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'playground',
        name: 'LinkPlayground',
        component: () => import('~/src/views/iframe/index.vue'),
        meta: {
          title: 'Playground',
          icon: 'ri-airplay-line',
          iframePath: 'https://www.wangxiaoze.cn/playground/',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'Demos',
        name: 'Demos',
        component: () => import('~/src/views/iframe/index.vue'),
        meta: {
          title: 'Demos',
          icon: 'ri-criminal-line',
          iframePath: 'https://www.wangxiaoze.cn/demos',
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
] as ISimRouterRecordRaw[]
