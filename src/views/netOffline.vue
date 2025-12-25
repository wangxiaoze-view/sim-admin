<script setup lang="ts">
  import { link } from '~/src/config'
  defineOptions({ name: 'NetOffline' })
  const { not_network } = link

  const onGoHone = () => {
    window.location.href = '/'
  }
</script>

<template>
  <div class="error_page">
    <el-row class="left" :gutter="20">
      <el-col :lg="12" :md="10">
        <img :src="not_network" alt="" />
      </el-col>
      <el-col class="right" :lg="12" :md="14">
        <h1>500 NetWork Error</h1>
        <div class="desc">您的网络不通～您可以参考以下解决方案</div>
        <ul class="desc">
          <li>1. 请检查您的路由器或者网线是否正常</li>
          <li>2. 请检查您的运营商网络是否正常</li>
          <li>3. 请联系管理员解决</li>
        </ul>
        <el-button class="go-home" @click="onGoHone" type="primary">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>
