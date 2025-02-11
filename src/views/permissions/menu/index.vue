<script setup lang="ts">
  import { TUserRole } from '~/src/enum'
  import { changeRole } from '~/src/utils'
  import { useUser } from '~/src/hooks'

  defineOptions({
    name: 'PermissionMenu',
  })

  const { getUserInfo } = useUser()
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-alert title="可以点击下方的按钮可以切换角色权限" type="warning" />

    <p>您当前的用户角色为：{{ getUserInfo.roles }}</p>

    <p>您可以切换不同的角色之后观察左侧菜单：</p>
    <div>
      <el-button type="primary" v-permission="'sim:read'">sim:read权限才会显示</el-button>
      <el-button type="primary" v-permission="['sim:write']">sim:write权限才会显示</el-button>
      <el-button type="primary" v-permission="['sim:delete']">sim:delet权限才会显示</el-button>
    </div>
    <p>您可以切换不同的角色：</p>
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
