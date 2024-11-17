export const homeRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'ri-home-line',
    },
    component: () => import('~/library/layouts/index.vue'),
    children: [
      {
        path: 'workbench',
        name: 'HomeIndex',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '工作区',
          icon: 'ri-list-check-3',
          notClose: true,
        },
      },
      {
        path: 'analyse',
        name: 'HomeAnalyse',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '分析台',
          icon: 'ri-bubble-chart-line',
        },
      },
    ],
  },
  {
    path: '/analyse',
    name: 'HomeAnalyse',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '测试',
      icon: 'ri-bubble-chart-line',
    },
    children: [
      {
        path: 'analyse',
        name: 'HomeAnalyse',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '分析台',
          icon: 'ri-bubble-chart-line',
        },
      },
    ],
  },
]
