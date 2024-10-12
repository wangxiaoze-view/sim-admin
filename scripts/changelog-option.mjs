import compareFunc from 'compare-func'
import { cloneDeep } from 'lodash-es' // 引入 lodash 库用于深拷贝

const typeMapping = {
  feat: '✨ Features | 新功能',
  fix: '🐛 Bug Fixes | Bug 修复',
  perf: '⚡ Performance Improvements | 性能优化',
  revert: '⏪ Reverts | 回退',
  docs: '📝 Documentation | 文档',
  style: '💄 Styles | 风格',
  refactor: '♻ Code Refactoring | 代码重构',
  test: '✅ Tests | 测试',
  build: '👷‍ Build System | 构建',
  ci: '🔧 Continuous Integration | CI 配置',
  chore: '🎫 Chores | 其他更新',
}
export default {
  writerOpts: {
    transform: (commit, context) => {
      let discard = true
      const issues = []
      let _commit = cloneDeep(commit) // 使用 lodash 的深拷贝

      _commit.notes = _commit.notes.map((note) => {
        if (note.title === 'BREAKING CHANGES') {
          note.title = 'BREAKING CHANGES'
          discard = false
        }
        return note
      })

      _commit.type = typeMapping[_commit.type] || _commit.type

      if (_commit.scope === '*') {
        _commit.scope = ''
      }

      if (typeof _commit.hash === 'string') {
        _commit.shortHash = _commit.hash.substring(0, 7)
      }

      if (typeof _commit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl

        if (url) {
          url = `${url}/issues/`
          _commit.subject = _commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue)
            return `[#${issue}](${url}${issue})`
          })
        }

        if (context.host) {
          _commit.subject = _commit.subject.replace(
            /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
            (_, username) => {
              if (username.includes('/')) {
                return `@${username}`
              }
              return `[@${username}](${context.host}/${username})`
            }
          )
        }
      }

      _commit.references = _commit.references.filter((reference) => {
        return issues.indexOf(reference.issue) === -1
      })

      return _commit
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: compareFunc,
  },
}
