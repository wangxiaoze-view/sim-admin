<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import QRCode from 'qrcode'
  import VueQrcode from 'vue-qrcode'

  defineOptions({
    name: 'ComQrcode',
  })

  const url = 'https://www.wangzevw.com'

  const QRCodeMsg = ref()

  const getQrCode = () => {
    QRCodeMsg.value = ''
    const opts = {
      errorCorrectionLevel: 'H', //容错级别
      type: 'image/png', //生成的二维码类型
      quality: 0.3, //二维码质量
      margin: 12, //二维码留白边距
      width: 200, //宽
      height: 180, //高
      text: url, //二维码内容
      color: {
        dark: '#333333', //前景色
        light: '#fff', //背景色
      },
    }
    QRCodeMsg.value = url
    const msg = document.getElementById('QRCode_header')
    QRCode.toCanvas(msg, QRCodeMsg.value, opts, function () {})
  }

  onMounted(() => {
    getQrCode()
  })
</script>

<template>
  <el-row :gutter="20">
    <el-col :lg="12" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <canvas id="QRCode_header"></canvas>
      </el-card>
    </el-col>
    <el-col :lg="12" :md="12" :offset="0" class="mb-20">
      <el-card class="sim-gruid--item" shadow="hover">
        <vue-qrcode
          :value="url"
          :color="{ dark: '#000000ff', light: '#ffffffff' }"
          :size="200"
          type="image/jpeg"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .sim-gruid--item {
    .sim-entrance--header,
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  :deep(.el-card__body) {
    height: 300px;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>
