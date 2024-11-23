<script lang="ts" setup>
  import { onMounted, reactive } from 'vue'

  interface IPostMessage {
    type: string
    message: string
  }

  // 初始化
  const init = reactive({
    postMessage: (channel: BroadcastChannel, options: IPostMessage) => {
      channel.postMessage(options)
    },
    createdChannel: (name: string) => {
      const channel = new BroadcastChannel(name)

      init.postMessage(channel, {
        type: 'init',
        message: '链接中...',
      })

      // window.addEventListener("unload", () => {
      // 	init.postMessage(channel, {
      // 		type: "close",
      // 		message: "关闭链接...",
      // 	});
      // });
      return channel
    },
  })

  // 公共的管道名字
  const name = 'channel_message'

  // 初始化A和B的管道
  const A = reactive({
    result: {} as IPostMessage,
    channel: init.createdChannel(name),
    // 监听管道消息
    channelMessage: () => {
      A.channel.onmessage = ({ data }) => {
        if (data.type === 'init') {
          A.result = data
          B.result = data
        }
      }
    },
    // 发送管道消息
    postMessage: (options: IPostMessage) => {
      init.postMessage(A.channel, options)
    },
  })

  const B = reactive({
    result: {} as IPostMessage,
    channel: init.createdChannel(name),
    channelMessage: () => {
      B.channel.onmessage = ({ data }) => {
        if (data.type === 'close') {
          A.result = data
        }
        B.result = data
      }
    },
  })

  const toBChannel = () => {
    A.postMessage({
      type: 'add',
      message: Date.now() + 'A发送消息给B',
    })
  }

  const toAClose = () => {
    A.postMessage({
      type: 'close',
      message: 'A关闭链接...',
    })
    A.channel.close()
  }

  const toAOpen = () => {
    A.channel = init.createdChannel(name)
    B.channel = init.createdChannel(name)
    A.channelMessage()
  }

  onMounted(() => {
    A.channelMessage()
    B.channelMessage()
  })
</script>

<template>
  <div class="box">
    <h1>A ---> B 发送管道消息</h1>
    <div class="container">
      <div class="A">
        <template v-if="A.result.type !== 'close'">
          <h3>A区域---{{ A.result.message }}</h3>
          <button @click="toBChannel">向B区域发送消息</button>
          <button @click="toAClose">关闭链接</button>
        </template>
        <template v-else>
          <h3>链接已关闭</h3>
          <button @click="toAOpen">打开链接</button>
        </template>
      </div>
      <div class="B">
        <template v-if="B.result.type !== 'close'">
          <h3>B区域---{{ B.result.message }}</h3>
        </template>

        <template v-else>
          <h3>链接已关闭</h3>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);

    h1 {
      text-align: center;
      margin-bottom: 6px;
    }
  }
  .container {
    display: flex;
    height: 300px;
    align-items: center;
    justify-content: space-evenly;
    .A,
    .B {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

      button {
        margin-top: 20px;
        background-color: #fff;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
</style>
