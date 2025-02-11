<script setup lang="ts">
  import { ref, h } from 'vue'
  import { TUserRole } from '~/src/enum'

  defineOptions({
    name: 'Directive',
  })

  const color = ref('#FF0000')
  const count = ref(0)
  const count2 = ref(100)

  const Text = h('div', [
    h(
      'a',
      {
        style: {
          color: 'var(--el-color-danger)',
          textDecoration: 'underline',
          fontSize: '16px',
          fontWeight: 'bold',
          marginRight: '4px',
          display: 'block',
        },
        href: 'https://www.wangzevw.com',
        target: '_blank',
        // 不支持事件注册
        // onClick: () => {
        //   console.log('click')
        // },
      },
      '这是我的网站'
    ),
    h('p', '可以支持 h 函数的组件，当然仅仅支持文案的展示，不支持交互~~'),
  ])
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            聚焦
            <el-button type="primary" link>v-focus</el-button>
          </span>
        </div>
        <div class="content">
          <el-input placeholder="自动聚焦" v-focus></el-input>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            Icon颜色
            <el-button type="primary" link>v-icon-colo</el-button>
          </span>
        </div>
        <div class="content" style="text-align: center">
          <el-icon class="sim-icon" :size="50" style="outline: none">
            <i class="ri-instance-line" v-icon-color="color"></i>
          </el-icon>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            节流
            <el-button type="primary" link>v-throttle</el-button>
          </span>
        </div>
        <div class="content">
          <h1>{{ count }}</h1>
          <br />
          <el-button type="primary" v-throttle="() => count++">
            节流按钮, 直接使用fn(默认1s)
          </el-button>
          <el-button type="primary" v-throttle="{ time: 2000, fn: () => count++ }">
            节流按钮, 使用配置时间函数(2s)
          </el-button>
        </div>
      </el-card>
    </el-col>
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            防抖
            <el-button type="primary" link>v-debounce</el-button>
          </span>
        </div>
        <div class="content">
          <h1>{{ count2 }}</h1>
          <br />
          <el-button type="primary" v-debounce="() => count2++">
            防抖按钮, 直接使用fn(默认1s)
          </el-button>
          <el-button type="primary" v-debounce="{ time: 2000, fn: () => count2++ }">
            防抖按钮, 使用配置时间函数(2s)
          </el-button>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            用户角色
            <el-button type="primary" link>v-role</el-button>
          </span>
        </div>
        <div class="content">
          <el-button type="primary" class="mb-10" v-role="[TUserRole.ADMIN]">
            Admin角色 显示按钮
          </el-button>
          <el-button type="success" class="mb-10" v-role="[TUserRole.USER]">
            User角色 显示按钮
          </el-button>
          <el-button type="danger" class="mb-10" v-role="[TUserRole.TEST]">
            Test角色 显示按钮
          </el-button>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            用户权限
            <el-button type="primary" link>v-permission</el-button>
          </span>
        </div>
        <div class="content">
          <el-button type="primary" class="mb-10" v-permission="'sim:read'">
            sim:read权限显示
          </el-button>
          <el-button type="primary" class="mb-10" v-permission="['sim:write']">
            sim:write权限显示
          </el-button>
          <el-button type="primary" class="mb-10" v-permission="['sim:delete']">
            sim:delet权限显示
          </el-button>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            水波纹
            <el-button type="primary" link>v-ripple</el-button>
          </span>
        </div>
        <div class="content">
          <div class="box mb-10" v-ripple>点击预览</div>
          <el-button v-ripple class="mb-10" type="primary">Primary</el-button>
          <el-button v-ripple class="mb-10" type="success">Success</el-button>
          <el-button v-ripple class="mb-10" type="info">Info</el-button>
          <el-button v-ripple class="mb-10" type="warning">Warning</el-button>
          <el-button v-ripple class="mb-10" type="danger">Danger</el-button>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>
            tooltip
            <el-button type="primary" link>v-tooltip</el-button>
          </span>
        </div>
        <div class="content">
          <el-button v-ripple class="mb-10" type="primary" v-tooltip:top="'这是Primary主题按钮'">
            Primary
          </el-button>
          <el-button v-ripple class="mb-10" type="success" v-tooltip:right="'这是Success主题按钮'">
            Success
          </el-button>
          <el-button v-ripple class="mb-10" type="info" v-tooltip:bottom="'这是Info主题按钮'">
            Info
          </el-button>
          <el-button v-ripple class="mb-10" type="warning" v-tooltip:left="'这是Warning主题按钮'">
            Warning
          </el-button>
          <el-button v-ripple class="mb-10" type="danger" v-tooltip:top="Text">h函数</el-button>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <div>
            高亮
            <b>切记：生产环境使用注意该Api的兼容性</b>
            <el-button type="primary" link>v-highlight</el-button>
          </div>
        </div>
        <div class="content">
          <p class="high-text" v-highlight>这是一段高亮的文本</p>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <div>
            文字高亮
            <b>切记：生产环境使用注意该Api的兼容性</b>
            <el-button type="primary" link>v-highlight-single</el-button>
          </div>
        </div>
        <div class="content">
          <p class="high-text" v-highlight-single="'高'">这是一段高亮的文本</p>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <div>
            文字高亮--标签替换
            <el-button type="primary" link>v-highlight-replace</el-button>
          </div>
        </div>
        <div class="content">
          <p class="high-text" v-highlight-replace="['亮', '#FF0000']">这是一段高亮的文本</p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .content {
    height: 300px;
    align-content: center;
    .mb-10 {
      margin-bottom: 10px;
    }
    .box {
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 4px;
      margin: 20px 0;
      cursor: pointer;
      border: 1px solid var(--el-border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #999;
      letter-spacing: 2px;
    }

    .high-text {
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
</style>
