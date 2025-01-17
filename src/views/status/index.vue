<template>
  <el-card class="mb-20" shadow="hover">
    <el-alert title="如何设置菜单的状态?" type="warning" class="mb-20" />

    <p>
      菜单的状态分为四种情况：
      <code>badge</code>
      角标，
      <code>dot</code>
      小红点，
      <code>statusIcon</code>
      自定义图标，需要注意的是自定义图标需要在
      <code>~/library/components/SimSvg/index.vue</code>
      中配置svg或者图片等；
      <code>custom</code>
      <code>自定义组件</code>
      如果前三种情况不满足您的使用，那么第四种情况就是自定义组件
    </p>

    <ul>
      <li>
        1.
        <code>badge</code>
        需要展示角标，如：订单的数量，通知的数量，会话的数量，展示新功能等等, 对应菜单为:
        <code>{{ translate('角标') }} ，{{ translate('数字角标') }}</code>
      </li>
      <li>
        2.
        <code>dot</code>
        需要展示小红点, 如：消息提醒，动态提醒等等, 对应菜单为:
        <code>{{ translate('圆点') }}</code>
      </li>
      <li>
        3.
        <code>statusIcon</code>
        需要展示自定义图标，如新功能展示
        <code>new</code>
        的图片等等, 对应菜单为:
        <code>{{ translate('自定义图标') }}</code>
      </li>
      <li>
        4.
        <code>custom</code>
        需要展示自定义组件，如展示特使业务场景下的状态， 支持
        <code>h</code>
        函数和
        <code>component vue</code>
        的组件, 对应菜单为:
        <code>{{ translate('H函数') }}，{{ translate('Vue 组件') }}(鼠标移动可查看效果)</code>
      </li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">
  import { translate } from '~/src/i18n'

  defineOptions({
    name: 'StatusPage',
  })
</script>

<style scoped lang="scss">
  code {
    color: #f56c6c;
    font-weight: bold;
  }
  li {
    line-height: 2;
  }
</style>
