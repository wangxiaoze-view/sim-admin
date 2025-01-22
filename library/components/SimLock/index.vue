<script lang="ts" setup>
  import SimIcon from '../SimIcon/index.vue'
  import { useLocked } from '~/src/hooks'

  defineOptions({
    name: 'SimLock',
  })

  const {
    formModel,
    formRef,
    rules,
    lockImage,
    getUserInfo,
    toUnlock,
    changeImage,
    title,
    unLockTitle,
    changeTitle,
    tipTitle,
  } = useLocked()
</script>
<template>
  <teleport to="body">
    <el-form ref="formRef" :model="formModel" :rules="rules">
      <div class="sim-lock">
        <div
          class="sim-lock--image"
          :style="{
            background: `url(${lockImage}) center center/100% 100% fixed`,
          }"
        ></div>
        <div class="sim-lock--content">
          <div class="author-container">
            <el-avatar class="author-icon" :src="getUserInfo.avatar" />
            <div class="tip-row">
              <SimIcon icon-class="ri-git-repository-private-line" />
              {{ title }}
            </div>
            <div class="tip-row">{{ tipTitle }}</div>
            <el-form-item prop="password">
              <div class="input-container">
                <el-input
                  v-model="formModel.password"
                  class="input-row"
                  placeholder="请输入密码, 密码为：123"
                  show-password
                  size="large"
                  type="password"
                ></el-input>
                <el-button class="button-row" size="large" type="primary" @click="toUnlock">
                  {{ unLockTitle }}
                </el-button>
              </div>
            </el-form-item>

            <div class="pic-row">
              <el-button class="button-row" size="large" text type="primary" @click="changeImage">
                {{ changeTitle }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </el-form>
  </teleport>
</template>

<style scoped lang="scss">
  .sim-lock {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: 5000;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    &--image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 4999;
      filter: blur(10px);
    }

    &--content {
      padding: 50px 100px;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      text-align: center;
      z-index: 5200;

      .author-icon {
        width: 140px;
        height: 140px;
        margin-bottom: 20px;
      }

      .tip-row {
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 1px;
        color: var(--el-color-error);
        font-weight: bold;
        letter-spacing: 1px;

        :deep() {
          .sim-icon {
            i {
              color: var(--el-color-error) !important;
            }
          }
        }
      }

      .input-container {
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex: 1;

        .input-row {
          :deep(.el-input__wrapper) {
            border-radius: 0;
          }
        }

        .button-row {
          border-radius: 0;
        }
      }

      .pic-row {
        margin-top: 30px;
      }
    }
  }
</style>
