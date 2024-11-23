<script setup lang="ts">
  import { ref } from 'vue'
  import type Node from 'element-plus/es/components/tree/src/model/node'
  defineOptions({
    name: 'ComTree',
  })
  interface Tree {
    id: number
    label: string
    children?: Tree[]
  }
  let id = 1000

  const append = (data: Tree) => {
    const newChild = { id: id++, label: 'testtest', children: [] }
    if (!data.children) {
      data.children = []
    }
    data.children.push(newChild)
    dataSource.value = [...dataSource.value]
  }

  const remove = (node: Node, data: Tree) => {
    const parent = node.parent
    const children: Tree[] = parent.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
    dataSource.value = [...dataSource.value]
  }

  const dataSource = ref<Tree[]>([
    {
      id: 1,
      label: '技术部',
      children: [
        {
          id: 4,
          label: '前端',
          children: [
            {
              id: 9,
              label: 'Vue',
            },
            {
              id: 10,
              label: 'Node',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: '产品',
      children: [
        {
          id: 5,
          label: 'Ui工程师',
        },
        {
          id: 6,
          label: '产品经理',
        },
      ],
    },
    {
      id: 3,
      label: '后端',
      children: [
        {
          id: 7,
          label: 'Nest',
        },
        {
          id: 8,
          label: 'Mongodb',
        },
      ],
    },
  ])
</script>

<template>
  <el-card class="mb-20" shadow="hover">
    <el-tree
      style="max-width: 600px"
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <div>
            <el-button type="primary" link @click="append(data)">添加</el-button>
            <el-button type="danger" link @click="remove(node, data)">删除</el-button>
          </div>
        </span>
      </template>
    </el-tree>
  </el-card>
</template>

<style lang="scss" scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
