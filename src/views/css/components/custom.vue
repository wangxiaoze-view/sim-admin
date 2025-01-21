<script setup lang="ts">
  import { h } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const text = h(
    'div',
    {
      style: {
        fontSize: '12px',
        lineHeight: '1.7',
        whiteSpace: 'nowrap',
      },
    },
    [
      '该路由页面已不再进行维护⚠️!',
      h('br'),
      '可查看 ',
      h(
        'code',
        {
          style: {
            color: 'var(--el-color-danger)',
            fontWeight: 'bold',
            textDecoration: 'underline',
            cursor: 'pointer',
          },
          onClick: () => {
            router.push({ name: 'Demos' })
          },
        },
        '外链--->Demos'
      ),
    ]
  )

  const status = h(
    'div',
    {
      style: {
        color: 'var(--el-color-danger)',
        textShadow: 'var(--el-color-danger) 4px 5px 3px',
      },
    },
    '废弃'
  )
</script>

<template>
  <el-tooltip effect="dark" placement="top" raw-content>
    <template #content>
      <component :is="text" />
    </template>
    <component :is="status" />
  </el-tooltip>
</template>

<style scoped lang="scss">
  .icon {
    margin: 0;
  }
</style>
