export const homeRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'ri-home-line',
    },
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        component: () => import('~/src/views/login/index.vue'),
        meta: {
          title: '首页',
          icon: 'ri-list-check-3',
        },
      },
      {
        path: 'workbench',
        name: 'HomeIndex',
        component: () => import('~/src/views/login/index.vue'),
        meta: {
          title: '工作区',
          icon: 'ri-list-check-3',
        },
      },
      {
        path: 'analyse',
        name: 'HomeAnalyse',
        component: () => import('~/src/views/login/index.vue'),
        meta: {
          title: '分析',
          icon: 'ri-bubble-chart-line',
        },
      },
    ],
  },
]
