<script setup lang="ts">
  import Mock from 'mockjs'
  import { TUserRole } from '~/src/enum'
  import { setToken } from '~/src/utils'
  import { useUser } from '~/src/hooks'
  const { Random } = Mock

  defineOptions({
    name: 'PermissionRole',
  })

  const { getUserInfo } = useUser()
  const changeRole = (role: TUserRole) => {
    const config = {
      [TUserRole.ADMIN]: `Sim-Admin-Token-${Random.guid()}-${Date.now()}`,
      [TUserRole.USER]: `Sim-User-Token-${Random.guid()}-${Date.now()}`,
      [TUserRole.TEST]: `Sim-Test-Token-${Random.guid()}-${Date.now()}`,
    }
    const token = config[role]
    if (!token) return
    setToken(token)
    window.location.reload()
  }
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-alert title="可以点击下方的按钮可以切换角色权限" type="warning" />

    <p>您当前的用户角色为：{{ getUserInfo.roles }}</p>

    <p>您可以切换不同的角色之后观察左侧菜单：</p>
    <el-button
      type="primary"
      v-role="[TUserRole.USER, TUserRole.TEST]"
      @click="changeRole(TUserRole.ADMIN)"
    >
      Admin角色
    </el-button>
    <el-button
      type="success"
      v-role="[TUserRole.ADMIN, TUserRole.TEST]"
      @click="changeRole(TUserRole.USER)"
    >
      User角色
    </el-button>
    <el-button
      type="danger"
      v-role="[TUserRole.ADMIN, TUserRole.USER]"
      @click="changeRole(TUserRole.TEST)"
    >
      Test角色
    </el-button>
  </el-card>
</template>
