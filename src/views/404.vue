<script setup lang="ts">
  import { imageLinks } from '~/src/config'
  defineOptions({ name: '404' })
  const { not_found } = imageLinks

  const onGoHone = () => {
    window.location.href = '/'
  }
</script>

<template>
  <div class="error_page">
    <el-row class="left" :gutter="20">
      <el-col :lg="12" :md="10">
        <img :src="not_found" alt="" />
      </el-col>
      <el-col class="right" :lg="12" :md="14">
        <h1>404 Not Found</h1>
        <div class="desc">您访问的地址不存在哦～您可以参考以下解决方案</div>
        <ul class="desc">
          <li>1. 请检查您的输入是否有误</li>
          <li>2. 请检查您的网络连接</li>
          <li>3. 请联系管理员解决</li>
        </ul>
        <el-button class="go-home" @click="onGoHone" type="primary">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>
