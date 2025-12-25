<script setup lang="ts">
  import { ref } from 'vue'
  import type { UploadUserFile } from 'element-plus'

  defineOptions({
    name: 'FunUpload',
  })

  const fileList = ref<UploadUserFile[]>([
    {
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
  ])

  const onChangeFile = (e: any) => {}
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>照片墙</span>
        </div>
        <el-upload
          v-model:file-list="fileList"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
        >
          <span class="up-text">选择图片上传</span>
        </el-upload>
      </el-card>
    </el-col>
    <el-col ::md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>文件列表</span>
        </div>
        <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        >
          <el-button type="primary">Click to upload</el-button>
          <template #tip>
            <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
          </template>
        </el-upload>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>切片上传</span>
        </div>

        <el-alert type="warning" title="可以查看源码'src/server/index.js'" class="mb-20"></el-alert>

        <input type="file" name="" id="" @change="onChangeFile" />
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .up-text {
    font-size: 14px;
    color: #999;
    letter-spacing: 1px;
  }
</style>
