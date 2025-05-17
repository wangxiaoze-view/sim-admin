<script setup lang="ts">
  import { useCheckUpdate } from '~/src/hooks'
  import SimSvg from '~/library/components/SimSvg/index.vue'
  import pkg from '~/package.json'
  import { imageLinks, githubCommit } from '~/src/config'

  defineOptions({
    name: 'SimUpdate',
  })
  const { update_img } = imageLinks
  const { version } = pkg
  const { isUpdate, updater, waitUpdater, loading } = useCheckUpdate()
</script>

<template>
  <el-dialog
    class="sim-update"
    v-model="isUpdate"
    append-to-body
    :show-close="false"
    :show-fullscreen="false"
    width="410px"
  >
    <template #header>
      <div class="title">
        新版本来袭!
        <SimSvg type="new_icon" />
      </div>
    </template>
    <img :src="update_img" alt="" />
    <p>
      当前版本:
      <el-text type="primary">{{ version }}</el-text>
    </p>
    <div>
      更新内容:
      <a target="_blank" :href="githubCommit">
        <el-text type="primary">更多内容在GitHub查看</el-text>
      </a>
      <ul>
        <li>1. 新增指令菜单, 列举不同自定义指令的使用案例;</li>
        <li>2. 右上角个人信息支持在线切换身份, 目前系统身份分为：超级管理员，管理员，游客;</li>
        <li>3. 新增自定义指令：v-tooltip；</li>
        <li>4. 网站迁移至服务器，提升网站的加载性能；</li>
        <li>5. 优化网站更新提示逻辑；</li>
      </ul>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button :loading="loading" @click="waitUpdater">不更新</el-button>
        <el-button type="primary" @click="updater" :loading="loading">立即更新</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
  .title {
    font-size: larger;
    font-weight: bold;
    text-align: center;
    color: var(--el-color-primary);
    text-shadow: 0px 2px 4px var(--el-color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    :deep() {
      .sim-svg {
        margin-left: 4px;
        // 上下移动的动画
        animation: moveUpDown 2s ease-in-out infinite;

        @keyframes moveUpDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
      }
    }
  }
  img {
    height: 100px;
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    li {
      padding: 4px 0;
    }
  }
</style>
