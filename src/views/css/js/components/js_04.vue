<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue'
  import { ElMessage } from 'element-plus'
  const msg = ref('')
  const voices = ref()

  const loading = ref(false)
  const model = reactive({
    lang: 'zh-CN',
    continuous: false,
    interimResults: false,
    maxAlternatives: 1,
  })

  const speechRecognition = ref()

  const toVoice = (type: string) => {
    try {
      loading.value = true
      // 语言
      speechRecognition.value.lang = model.lang || 'en-US'
      // 控制每次识别是返回连续结果，还是只返回单个结果
      speechRecognition.value.continuous = model.continuous
      // 控制是否应返回临时结果（true）或不（false）临时结果是尚未最终的结果
      speechRecognition.value.interimResults = model.interimResults
      //置每个结果提供的最大数
      speechRecognition.value.maxAlternatives = 1
      msg.value = ''
      speechRecognition.value.onresult = function (event: any) {
        msg.value = event.results[0][0].transcript
      }
      speechRecognition.value.onerror = function (error: any) {
        ElMessage.error(error.message || '该浏览器不支持')
      }
      speechRecognition.value[type]()
      loading.value = false
    } catch (error) {
      console.error(JSON.stringify(error))
    }
  }

  onMounted(() => {
    try {
      voices.value = speechSynthesis.getVoices()
      // @ts-expect-error TS2339
      speechRecognition.value = new webkitSpeechRecognition()
    } catch (error) {
      console.error(JSON.stringify(error))
    }
  })
</script>

<template>
  <div class="container">
    <el-form label-width="100px" label-position="left">
      <el-form-item>
        <el-input
          v-model.trim="msg"
          placeholder="请输入内容..."
          show-word-limit
          type="textarea"
          :rows="5"
        />
      </el-form-item>

      <el-form-item label="结果">
        <el-radio-group v-model="model.continuous">
          <el-radio :value="true" :label="true">连续</el-radio>
          <el-radio :value="false" :label="false">单个</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="临时结果">
        <el-radio-group v-model="model.interimResults">
          <el-radio :value="true" :label="true">是</el-radio>
          <el-radio :value="false" :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="最大数">
        <el-slider v-model="model.maxAlternatives" :step="1" :max="3" show-stops />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="toVoice('start')" :loading="loading">识别</el-button>
        <el-button type="danger" @click="toVoice('stop')" :loading="loading">结束</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    :deep(textarea) {
      resize: none;
    }
  }
</style>
