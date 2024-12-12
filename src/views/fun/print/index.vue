<script setup lang="ts">
  import { ref } from 'vue'
  import printJs from 'print-js'
  import { usePrint } from '~/src/hooks'
  import { dayjs } from '~/src/utils'

  defineOptions({
    name: 'FunPrint',
  })

  interface ITable {
    date: string
    name: string
    address: string
  }

  const imageHref = [
    'https://www.wangzevw.com/cdn-file/images/9e8609733f4a8658f2519b47df068f9.jpg',
    'https://www.wangzevw.com/cdn-file/images/7.2h8btdobvo.webp',
  ]

  const pdfSrc = 'https://printjs.crabbly.com/docs/printjs.pdf'

  const formModel = ref({
    name: '',
    psw: '',
  })

  const imageRef = ref<HTMLImageElement | null>(null)
  const { onSysPrint, onPrint } = usePrint()

  const tableData = ref<ITable[]>(
    Array.from({ length: 10 }, (_, index) => ({
      date: dayjs().format('YYYY-MM-DD'),
      name: '王小虎',
      address: '上海市青浦区徐泾镇',
    }))
  )

  const onClickPrintImag = () => {
    onPrint({
      printable: imageHref[0],
      type: 'image',
      header: '乌镇一日游',
    })
  }

  const onClickPrintImageForMany = () => {
    onPrint({
      printable: imageHref,
      type: 'image',
      header: '乌镇一日游',
    })
  }

  const onCLickPrintForTable = () => {
    printJs({
      printable: tableData.value,
      properties: ['date', 'name', 'address'],
      type: 'json',
    })
  }

  const onCLickPrintForTableHeader = () => {
    printJs({
      printable: tableData.value,
      properties: ['date', 'name', 'address'],
      type: 'json',
      header: '<h3 class="custom-h3">My custom header</h3>',
      style: '.custom-h3 { color: red; text-align: center; }',
    })
  }

  const onCLickPrintForTableStyle = () => {
    printJs({
      printable: tableData.value,
      properties: ['date', 'name', 'address'],
      type: 'json',
      header: '<h3 class="custom-h3">My custom header</h3>',
      style: '.custom-h3 { color: red; text-align: center; }',
      gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
      gridStyle: 'border: 2px solid #3971A5;',
    })
  }

  const onCLickPrintForForm = () => {
    printJs({ printable: 'print-form', type: 'html', header: 'PrintJS - Form Element Selection' })
  }

  const onCLickPrintForPdf = () => {
    printJs({ printable: pdfSrc, type: 'pdf', showModal: true })
  }
</script>

<template>
  <el-row :gutter="20">
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onClickPrintImag">图片打印</el-button>
        </div>
        <div class="card-height">
          <img :src="imageHref[0]" alt="" />
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onClickPrintImageForMany">
            多张图片打印
          </el-button>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <img v-for="item in imageHref" :key="item" :src="item" alt="" />
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onCLickPrintForTable">
            表格打印
          </el-button>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" />
              <el-table-column prop="name" label="名字" />
              <el-table-column prop="address" label="地址" />
            </el-table>
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onCLickPrintForTableHeader">
            表格打印自定义头部
          </el-button>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" />
              <el-table-column prop="name" label="名字" />
              <el-table-column prop="address" label="地址" />
            </el-table>
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onCLickPrintForTableStyle">
            表格打印自定义样式
          </el-button>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" />
              <el-table-column prop="name" label="名字" />
              <el-table-column prop="address" label="地址" />
            </el-table>
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onCLickPrintForForm">表单打印</el-button>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <el-form :model="formModel" label-width="80px" id="print-form">
              <el-form-item>
                <b style="color: #ff0000; font-size: 20px">请注意：打印表达只支持原生</b>
              </el-form-item>
              <el-form-item prop="string" label="用户名">
                <el-input v-model="formModel.name" placeholder="请输入用户名" />
              </el-form-item>
              <el-form-item prop="string" label="密码">
                <el-input v-model="formModel.psw" placeholder="请输入密码" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary">提交</el-button>
              </el-form-item>
            </el-form>
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>

    <el-col :md="24" :lg="12" :xl="8" :offset="0" :sm="24" :xs="24" class="mb-20">
      <el-card shadow="hover">
        <div class="header">
          <span>打印</span>
          <el-button ref="imageRef" type="primary" @click="onCLickPrintForPdf">PDF打印</el-button>
        </div>
        <div class="card-height">
          <el-scrollbar>
            <iframe :src="pdfSrc" frameborder="0"></iframe>
          </el-scrollbar>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
  $h: 350px;
  .card-height {
    height: $h;

    img {
      width: 100%;
      height: $h;
      border-radius: 4px;
    }

    iframe {
      width: 100%;
      height: $h;
    }
  }
</style>
