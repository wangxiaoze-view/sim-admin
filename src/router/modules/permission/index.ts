export const permissionRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('~/library/layouts/index.vue'),
    meta: {
      title: '权限',
      icon: 'ri-shield-keyhole-line',
    },
    children: [
      {
        path: 'role',
        name: 'PermissionRole',
        component: () => import('~/src/views/permissions/role/index.vue'),
        meta: {
          title: '角色',
          icon: 'ri-user-follow-line',
          roles: ['Admin', 'User', 'Test'],
        },
      },
      {
        path: 'menu',
        name: 'PermissionMenu',
        component: () => import('~/src/views/permissions/menu/index.vue'),
        meta: {
          title: '菜单',
          icon: 'ri-menu-add-fill',
          roles: ['Admin'],
        },
      },
    ],
  },
]
