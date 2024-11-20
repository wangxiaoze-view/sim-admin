<script setup lang="ts">
  import { useUserStore } from '~/src/stores/modules/user'
  import { imageLinks } from '~/src/config'
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { useLocked } from '~/src/hooks'

  defineOptions({
    name: 'SimWelcome',
  })

  const { ksrm_image } = imageLinks
  const {
    getUserInfo: { name, ip, country },
  } = useUserStore()
  const { randomImage } = useLocked()

  const todoList = [
    { name: '待处理邮件', icon: 'ri-mail-unread-line', color: '#e6a23c', num: 20 },
    { name: '待处理bug', icon: 'ri-bug-line', color: '#f56c6c', num: 0 },
    { name: '代办事项', icon: 'ri-todo-line', color: '#4c7cc3', num: 15 },
  ]
  const bannerList = new Array(4).fill(0).map((i) => randomImage(false))
</script>
<template>
  <el-row class="sim-welcome" :gutter="20">
    <el-col :span="16">
      <div
        class="card border border-card-radius"
        :style="{
          backgroundImage: `url(${ksrm_image})`,
          'background-size': 'contain',
          'background-repeat': 'no-repeat',
          'background-position': 'right',
        }"
      >
        <div class="title">
          欢迎回来，
          <span>{{ name }}</span>
          ，祝您开心每一天！
        </div>
        <div class="subTitle">当前登录地址：{{ country }}</div>
        <div class="subTitle">当前登录IP：{{ ip }}</div>
        <el-space :size="30" wrap>
          <span v-for="(item, index) in todoList" :key="index">
            <SimIcon :icon-class="item.icon" :color="item.color" />
            {{ item.name }}
            <b class="font-red" v-if="item.num">({{ item.num }})</b>
          </span>
        </el-space>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="card border border-card-radius">
        <el-carousel class="banner" autoplay>
          <el-carousel-item v-for="item in bannerList" :key="item">
            <el-image class="banner-image" :src="item" fit="cover" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  $height: 140px;
  .sim-welcome {
    .font-red {
      color: var(--el-color-danger);
    }
    .card {
      height: $height;
      background-color: var(--el-bg-color);
      padding: var(--el-padding-sapce-large);
      .title {
        font-size: var(--el-font-size-large);
        span {
          color: var(--el-color-primary);
        }
      }
      .subTitle {
        margin: var(--el-padding-sapce) 0;
        color: var(--el-color-info);
      }
      .banner {
        height: $height;
        width: 100%;
        :deep() {
          .el-carousel__item {
            height: $height;
          }
        }

        &-image {
          width: 100%;
          height: $height;
        }
      }
    }
  }
</style>
