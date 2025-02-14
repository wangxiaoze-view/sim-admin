import { defineAsyncComponent, h } from 'vue'

export default [
  {
    path: '/css',
    name: 'CssPage',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: 'CSS',
      icon: 'ri-css3-line',
      sort: 99,
      custom: () => defineAsyncComponent(() => import('~/src/views/css/components/custom.vue')),
    },
    children: [
      {
        path: 'button',
        name: 'CssButton',
        component: () => import('~/src/views/css/button/index.vue'),
        meta: {
          title: '按钮',
          icon: 'ri-radio-button-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'card',
        name: 'CssCard',
        component: () => import('~/src/views/css/card/index.vue'),
        meta: {
          title: '卡片',
          icon: 'ri-asterisk',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'image',
        name: 'CssImage',
        component: () => import('~/src/views/css/image/index.vue'),
        meta: {
          title: '图片',
          icon: 'ri-image-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'text',
        name: 'CssText',
        component: () => import('~/src/views/css/text/index.vue'),
        meta: {
          title: '文本',
          icon: 'ri-text',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'mutual',
        name: 'CssMutual',
        component: () => import('~/src/views/css/mutual/index.vue'),
        meta: {
          title: '交互',
          icon: 'ri-group-2-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'scroll',
        name: 'CssScroll',
        component: () => import('~/src/views/css/scroll/index.vue'),
        meta: {
          title: '滚动',
          icon: 'ri-scroll-to-bottom-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'canvas',
        name: 'CssCanvas',
        component: () => import('~/src/views/css/canvas/index.vue'),
        meta: {
          title: 'Canvas',
          icon: 'ri-hand',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'order',
        name: 'CssOrder',
        component: () => import('~/src/views/css/order/index.vue'),
        meta: {
          title: '订单',
          icon: 'ri-record-mail-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'js',
        name: 'CssJs',
        component: () => import('~/src/views/css/js/index.vue'),
        meta: {
          title: 'JS',
          icon: 'ri-javascript-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
] as ISimRouterRecordRaw[]
