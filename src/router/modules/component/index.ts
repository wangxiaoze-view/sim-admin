import { h } from 'vue'

export default [
  {
    path: '/comp',
    name: 'Comp',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '组件',
      icon: 'ri-stack-line',
      sort: 2,
    },
    children: [
      {
        path: 'icon',
        name: 'IconPage',
        component: () => import('~/library/layouts/index.vue'),
        meta: {
          title: '图标',
          icon: 'ri-remixicon-line',
          roles: ['Admin', 'User', 'Test'],
        },
        children: [
          {
            path: 'icon',
            name: 'IconPage',
            component: () => import('~/src/views/comp/icon/icon/index.vue'),
            meta: {
              title: '默认图标',
              // 多级不需要图标了，图标太多不好找
              icon: '',
              roles: ['Admin', 'User', 'Test'],
              custom: () =>
                h(
                  'b',
                  {
                    style: {
                      color: 'var(--el-color-danger)',
                      textShadow: 'var(--el-color-danger) 4px 5px 3px',
                    },
                  },
                  '新'
                ),
            },
          },
          {
            path: 'iconSelector',
            name: 'IconSelector',
            component: () => import('~/src/views/comp/icon/iconSelector/index.vue'),
            meta: {
              title: '图标选择器',
              icon: '',
              roles: ['Admin', 'User', 'Test'],
            },
          },
        ],
      },
      {
        path: 'table',
        name: 'CompTable',
        component: () => import('~/src/views/comp/table/index.vue'),
        meta: {
          title: '表格',
          icon: 'ri-table-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'transition',
        name: 'ComTransition',
        component: () => import('~/src/views/comp/transition/index.vue'),
        meta: {
          title: '过渡动画',
          icon: 'ri-meteor-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'clip',
        name: 'ComClip',
        component: () => import('~/src/views/comp/clip/index.vue'),
        meta: {
          title: '图片裁剪',
          icon: 'ri-scissors-cut-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'countAuto',
        name: 'ComCountAuto',
        component: () => import('~/src/views/comp/countAuto/index.vue'),
        meta: {
          title: '数字自增',
          icon: 'ri-sort-number-desc',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      // {
      //   path: 'idea',
      //   name: 'ComIdea',
      //   component: () => import('~/src/views/comp/idea/index.vue'),
      //   meta: {
      //     title: '编辑器',
      //     icon: 'ri-keyboard-line',
      //     roles: ['Admin', 'User', 'Test'],
      //   },
      // },
      {
        path: 'tree',
        name: 'ComTree',
        component: () => import('~/src/views/comp/tree/index.vue'),
        meta: {
          title: '树结构',
          icon: 'ri-node-tree',
          roles: ['Admin'],
        },
      },
      {
        path: 'qrcode',
        name: 'ComQrcode',
        component: () => import('~/src/views/comp/qrcode/index.vue'),
        meta: {
          title: '二维码',
          icon: 'ri-qr-code-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
    ],
  },
] as ISimRouterRecordRaw[]
