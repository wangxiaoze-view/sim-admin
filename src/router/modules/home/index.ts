export default [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'ri-home-line',
      sort: 1,
    },
    component: () => import('~/library/layouts/index.vue'),
    children: [
      {
        path: 'workbench',
        name: 'HomeWorkbench',
        component: () => import('~/src/views/home/workbench/index.vue'),
        meta: {
          title: '工作区',
          icon: 'ri-list-check-3',
          notClose: true,
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'analyse',
        name: 'HomeAnalyse',
        component: () => import('~/src/views/home/analyse/index.vue'),
        meta: {
          title: '分析台',
          icon: 'ri-bubble-chart-line',
          roles: ['Admin'],
        },
      },
    ],
  },
] as ISimRouterRecordRaw[]
