'use strict'

module.exports = {
  types: [
    { value: 'feat', name: 'feat: ✨ Features | 新功能' },
    { value: 'fix', name: 'fix: 🐛 Bug Fixes | Bug 修复' },
    { value: 'docs', name: 'docs: 📝 Documentation | 文档' },
    {
      value: 'style',
      name: 'style: 💄 Styles | 修改格式，不影响功能，例如空格、代码格式等',
    },
    {
      value: 'refactor',
      name: 'refactor: ♻ Code Refactoring | 代码重构，注意和特性、重构区分开',
    },
    { value: 'perf', name: ' perf: ⚡ Performance Improvements | 性能优化' },
    { value: 'test', name: 'test: ✅ Tests | 修改或添加测试文件' },
    {
      value: 'chore',
      name: 'chore: 🎫 Chores | 其他更新, 比如改变构建流程、或者增加依赖库、工具等',
    },
    { value: 'revert', name: 'revert: ⏪ Reverts | 回退版本' },
    { value: 'build', name: 'build: 👷 Build System | 构建' },
    { value: 'ci', name: ' ci: 🔧 Continuous Integration | 修改ci相关配置、脚本等' },
  ],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择修改涉及范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:\n',
    body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
    breaking: '非兼容性，破坏性变化说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 仅在feat、fix时填写破坏性更改
  subjectLimit: 100, // limit subject length
  breaklineChar: '|', // 设置body和footer中的换行符
}
