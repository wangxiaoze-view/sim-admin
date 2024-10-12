import js from '@eslint/js'
import globals from 'globals'
import ts from 'typescript-eslint'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import parserVue from 'vue-eslint-parser'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      ecmaVersion: 2020,
      parser: parserVue,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  { ignores: ['dist/', 'node_modules/', 'remote-components-lib-main'] },
]
