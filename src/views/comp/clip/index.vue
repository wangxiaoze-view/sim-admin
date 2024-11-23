<script setup lang="ts">
  import { ref } from 'vue'
  import VuePictureCropper, { cropper } from 'vue-picture-cropper'
  import { useLoading } from '~/src/hooks'

  defineOptions({
    name: 'ComClip',
  })
  // https://cropper.chengpeiquan.com/zh/
  const result = ref()
  const { loading, setLoading } = useLoading(true)
  const onReady = () => {
    setLoading(false)
  }

  const onClear = () => {
    if (!cropper) return
    cropper.clear()
    result.value = ''
  }

  const onReset = () => {
    if (!cropper) return
    cropper.reset()
    result.value = ''
  }

  const getResult = async () => {
    if (!cropper) return
    setLoading(true)
    const base64 = cropper.getDataURL()
    const blob: Blob | null = await cropper.getBlob()
    if (!blob) return

    // const file = await cropper.getFile({
    //   fileName: 'test.png'
    // })

    result.value = base64
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    // console.log(base64, blob, file)
  }
</script>

<template>
  <el-card shadow="hover" class="mb-20" v-loading="loading">
    <el-space :gap="20" class="mb-20">
      <el-button type="warning" @click="onClear">清除</el-button>
      <el-button type="danger" @click="onReset">重置</el-button>
      <el-button type="primary" @click="getResult">裁剪</el-button>
    </el-space>

    <VuePictureCropper
      class="mb-20"
      :boxStyle="{
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
        margin: 'auto',
      }"
      img="https://file.wangzevw.com/images/bg2.4qr6mtamhy.webp"
      :options="{
        viewMode: 1,
        dragMode: 'crop',
        aspectRatio: 16 / 9,
      }"
      @ready="onReady"
    />

    <div class="result" v-show="result">
      <p>裁剪的结果</p>
      <img :src="result" />
    </div>
  </el-card>
</template>
