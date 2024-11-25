<script setup lang="ts">
  import { imageLinks } from '~/src/config'
  defineOptions({ name: '403' })
  const { not_premission } = imageLinks

  const onGoHone = () => {
    window.location.href = '/'
  }
</script>

<template>
  <div class="error_page">
    <el-row class="left" :gutter="20">
      <el-col :lg="12" :md="10">
        <img :src="not_premission" alt="" />
      </el-col>
      <el-col class="right" :lg="12" :md="14">
        <h1>403 No Premission</h1>
        <div class="desc">您暂无权限访问～</div>
        <ul class="desc">
          <li>1. 请检查您的输入是否有误</li>
          <li>2. 请检查您的账户是否有权限</li>
          <li>3. 请联系管理员解决</li>
        </ul>
        <el-button class="go-home" @click="onGoHone" type="primary">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>
