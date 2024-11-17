<script lang="ts" setup>
  import { watch, ref } from 'vue'
  import { translate } from '~/src/i18n'
  import { useClipboard, useChangeTheme } from '~/src/hooks'
  import navType from './components/navTypePage.vue'
  import SimColorPicker from '../SimColorPicker/index.vue'
  import SimIcon from '~/library/components/SimIcon/index.vue'
  import { simMessage } from '~/src/utils'

  defineOptions({
    name: 'SimThemeDrawer',
  })
  const { copy, isSupported } = useClipboard()

  const visible = ref<boolean>(false)
  const drawerParams = ref<Record<string, any>>({})
  const setVisible = (isVisible: boolean, params: Record<string, any> = {}) => {
    visible.value = isVisible
    if (params) {
      drawerParams.value = params
    }
  }

  const { getTheme, setTheme, resetTheme } = useChangeTheme()

  const copyTheme = () => {
    if (!isSupported) {
      return simMessage('您的浏览器不支持Clipboard API', 'warning')
    }

    if (getTheme.value) {
      copy(JSON.stringify(getTheme.value))
      simMessage('主题设置已拷贝', 'success')
    }
  }

  watch(
    () => getTheme,
    (val) => {
      setTheme(val.value)
    },
    {
      deep: true,
    }
  )

  defineExpose({
    setVisible,
  })
</script>
<template>
  <teleport to="body">
    <el-drawer v-model="visible" v-bind="drawerParams" class="sim-theme-set">
      <template #default>
        <el-scrollbar>
          <el-form label-position="left" :model="getTheme">
            <div class="pad-container">
              <!-- 导航栏模式 -->
              <el-divider>{{ translate('导航栏') }}</el-divider>
              <navType :layout="getTheme.layout" />

              <!-- 界面功能 -->
              <el-divider>{{ translate('主题配置') }}</el-divider>
              <el-form-item class="sim-flex">
                <template #label>{{ translate('暗黑模式') }}</template>
                <el-switch
                  v-model="getTheme.isMode"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('自定义主题色') }}</template>
                <el-switch
                  v-model="getTheme.isColor"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>
              <el-form-item class="sim-flex" label-position="left" v-if="getTheme.isColor">
                <template #label>{{ translate('主题颜色') }}</template>
                <SimColorPicker />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('菜单风格') }}</template>
                <el-select v-model="getTheme.menuMode">
                  <el-option value="default" :label="translate('默认')" />
                  <el-option
                    value="line"
                    :disabled="getTheme.layout === 'row'"
                    :label="translate('线条')"
                  />
                  <el-option value="card" :label="translate('卡片')" />
                  <el-option value="arrow" :label="translate('箭头')" />
                </el-select>
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('主题尺寸') }}</template>
                <el-select v-model="getTheme.size">
                  <el-option value="large" :label="translate('大')" />
                  <el-option value="default" :label="translate('中')" />
                  <el-option value="small" :label="translate('小')" />
                </el-select>
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('标签风格') }}</template>
                <el-select v-model="getTheme.tabStyle">
                  <el-option value="default" :label="translate('无风格')" />
                  <el-option value="rectangle" :label="translate('矩形风格')" />
                  <el-option value="card" :label="translate('卡片风格')" />
                  <el-option value="line" :label="translate('线条风格')" />
                  <el-option value="smart" :label="translate('灵动风格')" />
                </el-select>
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('色弱模式') }}</template>
                <el-switch
                  v-model="getTheme.colorWeakness"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>
                  {{ translate('按钮空格') }}

                  <el-tooltip
                    effect="dark"
                    :content="translate('在支持国际化的情况下，按钮空格不生效')"
                    placement="top-start"
                  >
                    <SimIcon icon-class="ri-information-line" />
                  </el-tooltip>
                </template>
                <el-switch
                  v-model="getTheme.autoInsertSpace"
                  inline-prompt
                  disabled
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <!-- 操作配置 -->
              <el-divider>{{ translate('操作配置') }}</el-divider>
              <el-form-item class="sim-flex">
                <template #label>{{ translate('头部固定') }}</template>
                <el-switch
                  v-model="getTheme.isFixedHeader"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>
              <el-form-item class="sim-flex">
                <template #label>{{ translate('面包屑') }}</template>
                <el-switch
                  v-model="getTheme.isBreadcrumb"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示标签页') }}</template>
                <el-switch
                  v-model="getTheme.isTabs"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('标签页图标') }}</template>
                <el-switch
                  v-model="getTheme.isTabsIcon"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示调试') }}</template>
                <el-switch
                  v-model="getTheme.isDebug"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>
              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示锁屏') }}</template>
                <el-switch
                  v-model="getTheme.isLocked"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示全屏') }}</template>
                <el-switch
                  v-model="getTheme.isFullPage"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示消息') }}</template>
                <el-switch
                  v-model="getTheme.isNotice"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('国际化') }}</template>
                <el-switch
                  v-model="getTheme.isI18n"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示刷新') }}</template>
                <el-switch
                  v-model="getTheme.isRefresh"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('显示底部') }}</template>
                <el-switch
                  v-model="getTheme.isFooter"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <!-- 动画 -->
              <el-divider>{{ translate('页面动画') }}</el-divider>
              <el-form-item class="sim-flex">
                <template #label>{{ translate('顶部进度条') }}</template>
                <el-switch
                  v-model="getTheme.isProgress"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <el-form-item class="sim-flex">
                <template #label>{{ translate('页面动画') }}</template>
                <el-switch
                  v-model="getTheme.isPageTransition"
                  inline-prompt
                  :active-text="translate('开启')"
                  :inactive-text="translate('关闭')"
                />
              </el-form-item>

              <template v-if="getTheme.isPageTransition">
                <el-form-item class="sim-flex">
                  <template #label>{{ translate('动画类型') }}</template>
                  <el-select v-model="getTheme.transitionName">
                    <el-option value="default" :label="translate('默认')" />
                    <el-option value="fade-in" :label="translate('渐变')" />
                    <el-option value="scale" :label="translate('缩放')" />
                  </el-select>
                </el-form-item>
              </template>
            </div>
          </el-form>
        </el-scrollbar>
      </template>
      <template #footer>
        <el-button type="warning" @click="resetTheme">{{ translate('恢复默认') }}</el-button>
        <el-button type="primary" @click="copyTheme">{{ translate('拷贝设置') }}</el-button>
      </template>
    </el-drawer>
  </teleport>
</template>

<style lang="scss" scoped>
  .sim-theme-set {
    .pad-container {
      padding: 0 14px;
    }

    :deep() {
      .el-drawer__body {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  :deep(.sim-flex) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      flex: 1;
      align-items: center;

      .sim-icon {
        margin-left: 4px;
      }
    }
    .el-form-item__content {
      justify-content: flex-end;
    }
  }
</style>
