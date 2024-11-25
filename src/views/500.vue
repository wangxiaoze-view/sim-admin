<script setup lang="ts">
  import { imageLinks } from '~/src/config'
  defineOptions({ name: '500' })
  const { not_error } = imageLinks

  const onGoHone = () => {
    window.location.href = '/'
  }
</script>

<template>
  <div class="error_page">
    <el-row class="left" :gutter="20">
      <el-col :lg="12" :md="10">
        <img :src="not_error" alt="" />
      </el-col>
      <el-col class="right" :lg="12" :md="14">
        <h1>500 Server Error</h1>
        <div class="desc">您访问的地址不存在哦～您可以参考以下解决方案</div>
        <ul class="desc">
          <li>1. 请检查您的服务器是否有异常错误</li>
          <li>2. 请检查您的接口是否正常</li>
          <li>3. 请联系管理员解决</li>
        </ul>
        <el-button class="go-home" @click="onGoHone" type="primary">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>
