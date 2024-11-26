<script lang="ts" setup>
  import { computed, inject, ref } from 'vue'
  import SimThemeDrawer from '../SimThemeDrawer/index.vue'
  import SimError from '../SimError/index.vue'
  import SimLanguage from '../SimLanguage/index.vue'
  import SimIcon from '../SimIcon/index.vue'
  import SimColorPicker from '../SimColorPicker/index.vue'
  import SimSwitchDark from '../SimSwitchDark/index.vue'
  import SimLock from '../SimLock/index.vue'
  import { translate } from '~/src/i18n'
  import { useChangeTheme, useFullscreen, useError, useUser } from '~/src/hooks'
  import { getNoticeListApi } from '~/src/api/other'
  import { INoticeDataType, INoticeType } from '~/src/api/types'

  defineOptions({
    name: 'SimHeaderTools',
  })

  const tabIndex = ref(1)
  const themeRef = ref<InstanceType<typeof SimThemeDrawer>>()
  const debugRef = ref<InstanceType<typeof SimError>>()
  const noticeData = ref<INoticeType[]>([])

  const { getUserInfo, logout } = useUser()
  const { getTheme, setTheme } = useChangeTheme()
  const { isFullscreen, toggle } = useFullscreen()
  const { getErrors } = useError()

  const $simEmit = inject<any>('$simEmit')
  const noticeList = computed(() => {
    return noticeData.value.find((item) => item.type === tabIndex.value)?.data || []
  })
  const getNoticeNum = (tabIndex: number) => {
    return noticeData.value.find((item) => item.type === tabIndex)?.data.length || 0
  }

  const getAllNotice = computed((): Partial<INoticeDataType>[] => {
    return noticeData.value.reduce((total, item) => {
      total.push(...item.data)
      return total
    }, [] as Partial<INoticeDataType>[])
  })

  // 触发mitt.emit
  const onRefresh = () => {
    $simEmit('refresh')
  }

  const showTheme = () => {
    themeRef.value?.setVisible(true, {
      size: '300px',
      title: translate('主题设置'),
    })
  }

  const showDebug = () => {
    debugRef.value?.setVisible(true, {
      size: '600px',
      title: translate('错误日志'),
    })
  }

  const changeUserMenu = (command: 'userCenter' | 'logout') => {
    switch (command) {
      case 'userCenter':
        break
      case 'logout':
        logout()
        break
      default:
        break
    }
  }

  const getNoticeList = async () => {
    const { success, context } = await getNoticeListApi()
    if (!success) return
    noticeData.value = context
  }

  getNoticeList()
</script>
<template>
  <div class="sim-tools">
    <SimSwitchDark class="cursor-icon" />
    <SimColorPicker class="cursor-icon" />

    <el-tooltip :content="translate('错误日志')" effect="dark" placement="bottom">
      <el-badge
        :is-dot="getErrors.length > 0"
        v-show="getTheme.device !== 'mobile' && getTheme.isDebug"
        class="cursor-icon"
      >
        <SimIcon icon-class="ri-bug-line" @click="showDebug" />
      </el-badge>
    </el-tooltip>

    <!--lock-->
    <el-tooltip :content="translate('锁屏')" effect="dark" placement="bottom">
      <SimIcon
        class="cursor-icon"
        v-show="getTheme.device !== 'mobile' && getTheme.isLocked"
        icon-class="ri-rotate-lock-line"
        @click="setTheme({ isLockedLayer: true })"
      />
    </el-tooltip>

    <!--全屏-->
    <el-tooltip :content="translate('全屏')" effect="dark" placement="bottom">
      <SimIcon
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
        :value="getAllNotice.length > 0 ? getAllNotice.length : ''"
      >
        <SimIcon icon-class="ri-message-3-line" />
      </el-badge>

      <template #dropdown>
        <el-scrollbar max-height="500">
          <div class="sim-notice">
            <el-tabs v-model="tabIndex">
              <el-tab-pane
                v-for="item in noticeData"
                :key="item.type"
                :label="`${item.title}${getNoticeNum(item.type) ? `(${getNoticeNum(item.type)})` : ''}`"
                :name="item.type"
              >
                <el-empty v-if="noticeList.length === 0" description="暂无数据" />
                <template v-else>
                  <div class="row" v-for="(notice, index) in noticeList" :key="index">
                    <el-avatar
                      class="row-avthor"
                      :src="notice.avthor"
                      alt="string"
                      v-if="notice.avthor"
                    ></el-avatar>
                    <div class="row-content">
                      <div class="row-title">
                        <span class="row-title--name">
                          {{ notice.name ? `${notice.name} @你` : notice.title }}
                        </span>
                        <span class="row-title--tag" :class="[notice.tipClass]" v-if="notice.tip">
                          {{ notice.tip }}
                        </span>
                      </div>
                      <div class="row-desc">{{ notice.description }}</div>
                    </div>
                  </div>
                </template>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-scrollbar>
      </template>
    </el-dropdown>

    <SimLanguage class="cursor-icon" />

    <el-tooltip :content="translate('刷新')" effec="dark" placement="bottom">
      <SimIcon
        v-show="getTheme.isRefresh"
        class="cursor-icon"
        icon-class="ri-refresh-line"
        @click="onRefresh"
      />
    </el-tooltip>

    <el-tooltip :content="translate('主题设置')" effect="dark" placement="bottom">
      <SimIcon
        v-show="getTheme.device !== 'mobile'"
        class="cursor-icon"
        icon-class="ri-settings-3-line"
        @click="showTheme"
      />
    </el-tooltip>

    <el-dropdown @command="changeUserMenu">
      <div class="login-user">
        <el-avatar class="login-user--icon" :src="getUserInfo.avatar" />
        {{ getUserInfo.name }}
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <!-- <el-dropdown-item command="userCenter">
            <SimIcon class="cursor-icon" icon-class="ri-user-2-line" />
            {{ translate('个人中心') }}
          </el-dropdown-item> -->
          <el-dropdown-item command="logout">
            <SimIcon class="cursor-icon" icon-class="ri-logout-box-line" />
            {{ translate('退出登录') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <template v-if="getTheme.isLockedLayer">
      <SimLock />
    </template>

    <SimError ref="debugRef" />

    <SimThemeDrawer ref="themeRef" />
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

  :deep() {
    .sim-notice {
      padding: var(--el-padding-sapce);
      width: 300px;

      .row {
        display: flex;
        align-items: center;
        padding: 10px 0;
        &-avthor {
          margin-right: 10px;
        }
        &-title {
          margin-bottom: 4px;
          &--tag {
            color: var(--el-color-white);
            font-size: 10px;
            border-radius: 4px;
            padding: 2px 4px;
            &.out {
              background-color: var(--el-color-danger);
            }
            &.ing {
              background-color: var(--el-color-primary);
            }
            &.todo {
              background-color: var(--el-color-info);
            }
          }
        }
        &-content {
          flex: 1;
          .row-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .row-desc {
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
  }
</style>
