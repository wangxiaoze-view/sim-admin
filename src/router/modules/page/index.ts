export default [
  {
    path: '/page',
    name: 'Page',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '页面',
      icon: 'ri-article-line',
      sort: 7,
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
        component: () => import('~/library/layouts/index.vue'),
        // component: () => import('~/src/views/page/result/index.vue'),
        meta: {
          title: '结果',
          icon: 'ri-equal-line',
          roles: ['Admin', 'User', 'Test'],
        },
        children: [
          {
            path: 'success',
            name: 'PageResultSuccess',
            component: () => import('~/src/views/page/result/success/index.vue'),
            meta: {
              title: '成功',
              icon: 'ri-criminal-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },
          {
            path: 'warning',
            name: 'PageResultWarning',
            component: () => import('~/src/views/page/result/warning/index.vue'),
            meta: {
              title: '警告',
              icon: 'ri-alarm-warning-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },
          {
            path: 'error',
            name: 'PageResultError',
            component: () => import('~/src/views/page/result/error/index.vue'),
            meta: {
              title: '错误',
              icon: 'ri-close-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },
          {
            path: 'info',
            name: 'PageResultInfo',
            component: () => import('~/src/views/page/result/info/index.vue'),
            meta: {
              title: '信息',
              icon: 'ri-file-info-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },
          {
            path: '403',
            name: '403',
            component: () => import('~/src/views/403.vue'),
            meta: {
              title: '403',
              icon: 'ri-emotion-normal-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },

          {
            path: '404',
            name: '404',
            component: () => import('~/src/views/404.vue'),
            meta: {
              title: '404',
              icon: 'ri-sticky-note-2-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },
          {
            path: '500',
            name: '500',
            component: () => import('~/src/views/500.vue'),
            meta: {
              title: '500',
              icon: 'ri-cloud-off-fill',
              roles: ['Admin', 'User', 'Test'],
            },
          },
          {
            path: 'netOffline',
            name: 'NetOffline',
            component: () => import('~/src/views/netOffline.vue'),
            meta: {
              title: '网络下线',
              icon: 'ri-signal-wifi-error-line',
              roles: ['Admin', 'User', 'Test'],
            },
          },
        ],
      },
    ],
  },
] as ISimRouterRecordRaw[]
