module.exports = {
  questions: [
    {
      type: 'list',
      name: 'type',
      message: '请选择要提交的更改类型:',
      choices: [
        { value: 'fix', name: '🐛 fix: -------- 修复BUG' },
        { value: 'feat', name: '✨ feat: ------- 新功能' },
        { value: 'docs', name: '📝 docs: ------- 仅文档更改' },
        {
          value: 'style',
          name: '💄 style: ------ 不影响代码运行的更改(调整空白、格式、缺少分号等)',
        },
        {
          value: 'chore',
          name: '🗃️  chore: ------ 非 src 和 test 的修改',
        },
        {
          value: 'refactor',
          name: '♻️  refactor: --- 重构架构或代码',
        },
        { value: 'perf', name: '⚡️ perf:  ------ 改进性能的代码更改' },
        { value: 'test', name: '🧪 test:  ------ 添加测试单元' },
        {
          value: 'revert',
          name: '⏪ revert: ----- 回退至某一个版本',
        },
        {
          value: 'merge',
          name: '🚚 merge: ------ 合并一个分支, 解决冲突分支',
        },
        {
          value: 'ci',
          name: '👷 ci: --------- 自动化流程配置或脚本修改',
        },
        {
          value: 'build',
          name: '🔧 build: ------ 修改构建流程或外部依赖',
        },
      ],
    },

    {
      type: 'list',
      name: 'scope',
      message: '请选择更改的范围:',
      choices() {
        return [
          { name: '无', value: false },
          { name: '自定义', value: 'custom' },
        ]
      },
      filter(value, answers) {
        return value || ''
      },
    },

    {
      type: 'input',
      name: 'customScope',
      message: '请输入自定义的变更的范围(可选):',
      when(answers) {
        return answers.scope === 'custom'
      },
      filter(value, answers) {
        answers.scope = value || ''
        return value || ''
      },
    },

    {
      type: 'input',
      name: 'subject',
      message: '请简明扼要的摘要描述(建议字数在50字内):',
      validate(value) {
        return value.length > 50 ? `[subject] Exceed limit: 50` : true
      },
    },

    {
      type: 'input',
      name: 'body',
      message: '请提供更详细的变更说明(可选), 使用“\\n”换行:',
    },

    {
      type: 'input',
      name: 'breaking',
      message: '请列出任何重大变化(可选):',
      when(answers) {
        return /^(:[a-z0-9A-Z_-]+(:)(\s*))?(feat|fix)(\2\s*)?$/.test(
          answers.type.toLowerCase(),
        )
      },
    },

    {
      type: 'input',
      name: 'footer',
      message: '请列出此更改关闭的任何问题(可选), 例如: #31,#34:',
    },
  ],

  templater: (answers, wrap) => {
    let template = ''
    template += answers.type ? `${answers.type}` : ``
    template += answers.scope ? `(${answers.scope})` : ``
    template += answers.subject ? `: ${answers.subject}` : ``
    template += answers.body ? `\n\n${wrap(answers.body)}` : ``
    template += answers.breaking
      ? `\n\nBREAKING CHANGE: ${wrap(answers.breaking)}`
      : ``
    template += answers.footer
      ? `\n\nISSUES CLOSED: ${wrap(answers.footer)}`
      : ``

    return template
  },

  language: 'cn',
}
