export const functionRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/fun',
    name: 'Fun',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '功能',
      icon: 'ri-apps-line',
    },
    children: [
      {
        path: 'flow',
        name: 'FunFlow',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '流程图',
          icon: 'ri-route-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
      {
        path: 'echarts',
        name: 'FunEcharts',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: 'Echarts',
          icon: 'ri-line-chart-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
      {
        path: 'print',
        name: 'FunPrint',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '打印',
          icon: 'ri-printer-line',
          roles: ['Admin', 'Test'],
        },
      },
      {
        path: 'watermarking',
        name: 'FunWatermarking',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '水印',
          icon: 'ri-contrast-drop-line',
          roles: ['Admin', 'Test'],
        },
      },
      {
        path: 'drag',
        name: 'FunDrag',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '拖拽',
          icon: 'ri-drag-drop-line',
          roles: ['Admin', 'Test'],
        },
      },
      {
        path: 'excel',
        name: 'FunExcel',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: 'Excel',
          icon: 'ri-file-excel-2-line',
          roles: ['Admin'],
        },
      },
      {
        path: 'preview',
        name: 'FunPreview',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '文件预览',
          icon: 'ri-landscape-line',
          roles: ['Admin'],
        },
      },
      {
        path: 'fullScreen',
        name: 'FunFullScreen',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '全屏',
          icon: 'ri-fullscreen-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
      {
        path: 'fullRipple',
        name: 'FunRipple',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '水波纹',
          icon: 'ri-water-flash-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
      {
        path: 'upload',
        name: 'FunUpload',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '上传',
          icon: 'ri-upload-cloud-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
      {
        path: 'download',
        name: 'FunDownload',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: '下载',
          icon: 'ri-download-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
      {
        path: 'websocket',
        name: 'FunWebsocket',
        component: () => import('~/src/views/home/index.vue'),
        meta: {
          title: 'Websocket',
          icon: 'ri-webhook-line',
          roles: ['Admin', 'Test', 'Test'],
        },
      },
    ],
  },
]