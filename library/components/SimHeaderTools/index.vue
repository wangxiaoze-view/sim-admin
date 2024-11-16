<script lang="ts" setup>
  import { ref } from 'vue'
  import { translate } from '~/src/i18n'
  import { useChangeTheme, useFullscreen } from '~/src/hooks'
  import { useUserStore } from '~/src/stores/modules/user'
  import SimThemeDrawer from '../SimThemeDrawer/index.vue'
  import SimLanguage from '../SimLanguage/index.vue'
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import SimColorPicker from '../SimColorPicker/index.vue'
  import SimSwitchDark from '../SimSwitchDark/index.vue'

  defineOptions({
    name: 'SimHeaderTools',
  })

  interface INoticeType {
    author: string
    title: string
    desc: string
    createTime: string
  }

  const {
    getUserInfo: { avatar, name },
  } = useUserStore()

  const themeRef = ref<InstanceType<typeof SimThemeDrawer>>()

  const getNoticeList = ref<INoticeType[]>([])
  const { getTheme, setTheme } = useChangeTheme()
  const { isFullscreen, toggle } = useFullscreen()

  const onRefresh = () => {}

  const showTheme = () => {
    themeRef.value?.setVisible(true, {
      size: '300px',
      title: translate('主题设置'),
    })
  }

  const changeUserMenu = (command: 'userCenter' | 'logout') => {
    switch (command) {
      case 'userCenter':
        break
      case 'logout':
        break
      default:
        break
    }
  }
</script>
<template>
  <div class="sim-tools">
    <SimSwitchDark class="cursor-icon" />
    <SimColorPicker class="cursor-icon" />

    <el-tooltip :content="translate('错误日志')" effect="dark" placement="bottom">
      <el-badge v-show="getTheme.device !== 'mobile' && getTheme.isDebug" class="cursor-icon">
        <sim-icon icon-class="ri-bug-line" />
      </el-badge>
    </el-tooltip>

    <!--lock-->
    <el-tooltip :content="translate('锁屏')" effect="dark" placement="bottom">
      <sim-icon
        class="cursor-icon"
        v-show="getTheme.device !== 'mobile' && getTheme.isLocked"
        icon-class="ri-rotate-lock-line"
        @click="setTheme({ isLocked: true })"
      />
    </el-tooltip>

    <!--全屏-->
    <el-tooltip :content="translate('全屏')" effect="dark" placement="bottom">
      <sim-icon
        class="cursor-icon"
        v-show="getTheme.device !== 'mobile' && getTheme.isFullPage"
        :icon-class="isFullscreen ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'"
        @click="toggle"
      />
    </el-tooltip>

    <!--消息-->
    <el-dropdown>
      <el-badge
        v-show="getTheme.isNotice"
        class="cursor-icon"
        :value="getNoticeList.length > 0 ? getNoticeList.length : ''"
      >
        <sim-icon icon-class="ri-message-3-line" />
      </el-badge>

      <template #dropdown>
        <el-scrollbar max-height="500">
          <div class="sim-notice">
            <div v-for="(item, index) in getNoticeList" :key="index" class="sim-notice--item">
              <el-avatar class="sim-notice--icon" :src="item.author" />
              <div class="sim-notice--content">
                <div class="title">
                  <div>{{ item.title }}</div>
                  <div>{{ item.createTime }}</div>
                </div>
                <div class="sub-title">{{ item.desc }}</div>
              </div>
            </div>
            <div style="text-align: center">
              <el-button icon="More" size="small" type="primary">查看更多</el-button>
            </div>
          </div>
        </el-scrollbar>
      </template>
    </el-dropdown>

    <SimLanguage class="cursor-icon" />

    <el-tooltip :content="translate('刷新')" effec="dark" placement="bottom">
      <sim-icon
        v-show="getTheme.isRefresh"
        class="cursor-icon"
        icon-class="ri-refresh-line"
        @click="onRefresh"
      />
    </el-tooltip>

    <el-tooltip :content="translate('主题设置')" effect="dark" placement="bottom">
      <sim-icon
        v-show="getTheme.device !== 'mobile'"
        class="cursor-icon"
        icon-class="ri-settings-3-line"
        @click="showTheme"
      />
    </el-tooltip>

    <el-dropdown @command="changeUserMenu">
      <div class="login-user">
        <el-avatar class="login-user--icon" :src="avatar" />
        {{ name }}
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="userCenter">
            <sim-icon class="cursor-icon" icon-class="ri-user-2-line" />
            {{ translate('个人中心') }}
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <sim-icon class="cursor-icon" icon-class="ri-logout-box-line" />
            {{ translate('退出登录') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <template v-if="getTheme.isLocked">
      <sim-lock />
    </template>

    <sim-theme-drawer ref="themeRef" />
  </div>
</template>

<style scoped lang="scss">
  .sim-tools {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    :deep() {
      .cursor-icon {
        display: flex;
        cursor: pointer;
        margin-right: 20px;
        outline: none;
        color: #000;
        font-weight: normal;
        transition: all 0.3s;
      }
    }

    .login-user {
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      .login-user--icon {
        margin-right: 16px;
      }
    }
  }
</style>

<style lang="scss">
  .sim-notice {
    padding: 14px;
    width: 300px;

    &--item {
      display: flex;
      align-items: flex-start;
      &:not(:last-of-type) {
        margin-bottom: 14px;
      }

      .sim-notice--icon {
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .sim-notice--content {
        margin-left: 16px;
        display: flex;
        flex: 1;
        flex-direction: column;

        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .sub-title {
          font-size: 12px;
          color: var(--el-color-info);
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
</style>
