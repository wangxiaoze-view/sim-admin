import { defineAsyncComponent, h } from 'vue'

/**
 * 菜单状态展示路由配置
 */
export default [
  {
    path: '/status',
    name: 'Status',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '菜单状态',
      icon: 'ri-asterisk',
      sort: 2,
    },
    children: [
      {
        path: 'badge',
        name: 'StatusPage',
        component: () => import('~/src/views/status/index.vue'),
        meta: {
          title: '角标',
          icon: 'ri-verified-badge-line',
          roles: ['Admin', 'User', 'Test'],
          badge: 'New',
        },
      },
      {
        path: 'number',
        name: 'NumberStatusPage',
        component: () => import('~/src/views/status/index.vue'),
        meta: {
          title: '数字角标',
          icon: 'ri-number-6',
          roles: ['Admin', 'User', 'Test'],
          badge: '6',
        },
      },
      {
        path: 'dot',
        name: 'DotStatusPage',
        component: () => import('~/src/views/status/index.vue'),
        meta: {
          title: '圆点',
          icon: 'ri-git-commit-line',
          roles: ['Admin', 'User', 'Test'],
          dot: true,
        },
      },
      {
        path: 'icon',
        name: 'IconStatusPage',
        component: () => import('~/src/views/status/index.vue'),
        meta: {
          title: '自定义图标',
          icon: 'ri-remixicon-line',
          roles: ['Admin', 'User', 'Test'],
          statusIcon: 'cup_icon',
        },
      },
      {
        path: 'customH',
        name: 'CustomHStatusPage',
        component: () => import('~/src/views/status/index.vue'),
        meta: {
          title: 'H函数',
          icon: 'ri-computer-line',
          roles: ['Admin', 'User', 'Test'],
          custom: () =>
            h(
              'div',
              {
                style: {
                  color: 'var(--el-color-danger)',
                  textShadow: 'var(--el-color-danger) 4px 5px 3px',
                },
              },
              '棒'
            ),
        },
      },
      {
        path: 'customVue',
        name: 'CustomVueStatusPage',
        component: () => import('~/src/views/status/index.vue'),
        meta: {
          title: 'Vue 组件',
          icon: 'ri-vuejs-line',
          roles: ['Admin', 'User', 'Test'],
          custom: () =>
            defineAsyncComponent(() => import('~/src/views/status/components/custom.vue')),
        },
      },
    ],
  },
] as ISimRouterRecordRaw[]
