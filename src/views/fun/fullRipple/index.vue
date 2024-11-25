<script lang="ts" setup>
  defineOptions({
    name: 'FunRipple',
  })
</script>

<template>
  <el-card shadow="hover" class="mb-20">
    <el-alert title="鼠标点击以下元素可以预览水波纹效果" type="success" :closable="false" />

    <div class="box" v-ripple>点击预览</div>
    <el-button v-ripple>Default</el-button>
    <el-button v-ripple type="primary">Primary</el-button>
    <el-button v-ripple type="success">Success</el-button>
    <el-button v-ripple type="info">Info</el-button>
    <el-button v-ripple type="warning">Warning</el-button>
    <el-button v-ripple type="danger">Danger</el-button>
  </el-card>
</template>

<style scoped lang="scss">
  .box {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 4px;
    margin: 20px 0;
    cursor: pointer;
    border: 1px solid var(--el-border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #999;
    letter-spacing: 2px;
  }
</style>
