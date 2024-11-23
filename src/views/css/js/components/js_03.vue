<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue'
  const msg = ref(
    `路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常旳自己，到了另一世界里。
    我爱热闹，也爱冷静;爱群居，也爱独处。像今晚上，一个人在这苍茫旳月下，什么都可以想，什么都可以不想，
    便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。`.replace(
      /\s|\r|\n|\t/g,
      ''
    )
  )
  const voices = ref()

  const loading = ref(false)
  const model = reactive({
    lang: 'zh-CN',
    pitch: 1,
    rate: 1,
    voice: 'zh-CN',
    volume: 1,
  })

  const utterance = ref()
  const toVoice = (type: string) => {
    try {
      loading.value = true
      // 初始化
      utterance.value = new SpeechSynthesisUtterance(msg.value)
      //语言
      utterance.value.lang = model.lang
      // 音高
      utterance.value.pitch = model.pitch
      // 速度
      utterance.value.rate = model.rate
      // 声音
      utterance.value.voice = voices.value.find((i: any) => i.lang === model.voice) || null
      // 音量
      utterance.value.volume = model.volume
      // 执行
      // @ts-expect-error TS2339
      speechSynthesis[type](utterance.value)
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    try {
      voices.value = speechSynthesis.getVoices()
      // speechSynthesis.onvoiceschanged = e => {
      // 	// @ts-ignore
      // 	voices.value = speechSynthesis.getVoices();
      // };
    } catch (error) {
      console.log(error)
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

      <el-form-item label="设置音高">
        <el-slider v-model="model.pitch" :step="0.5" :max="2" show-stops />
      </el-form-item>
      <el-form-item label="设置速度">
        <el-slider v-model="model.rate" :step="0.5" :max="3" show-stops />
      </el-form-item>
      <el-form-item label="设置声音">
        <el-select v-model="model.voice" placeholder="请选择声音">
          <el-option
            v-for="item in voices"
            :key="item.lang"
            :label="item.name"
            :value="item.lang"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设置音量">
        <el-slider v-model="model.volume" :step="0.2" :max="1" show-stops />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="toVoice('speak')" :loading="loading">播放</el-button>
        <el-button type="danger" @click="toVoice('cancel')" :loading="loading">停止</el-button>
        <el-button type="warning" @click="toVoice('pause')" :loading="loading">暂停</el-button>
        <el-button type="success" @click="toVoice('resume')" :loading="loading">继续播放</el-button>
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
