<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import Schema from 'async-validator'
  import { $sim } from '~/library/plugins/element'

  const ruleFormRef = ref<FormInstance>()

  const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('Please input digits'))
      } else {
        if (value < 18) {
          callback(new Error('Age must be greater than 18'))
        } else {
          callback()
        }
      }
    }, 1000)
  }

  const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
  })

  const rules = reactive<FormRules<typeof ruleForm>>({
    pass: [
      {
        required: true,

        validator: (rule, value) => value === 'test',
        type: 'string',
        message: '密码错误, 密码应该为 test',
      },
    ],
    checkPass: [{ required: true, validator: (rule, value) => value === 'test', type: 'string' }],
    age: [{ required: true, validator: checkAge, trigger: 'blur' }],
  })

  const validator = new Schema(rules)

  const submitForm = () => {
    validator.validate({ pass: '123', checkPass: 'test', age: 123 }, (errors) => {
      if (errors) {
        for (let i = 0; i < errors.length; i++) {
          return $sim.$simMessage(
            `字段 ${errors[i].field}: ${errors[i].message as string}`,
            'error'
          )
        }
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>
