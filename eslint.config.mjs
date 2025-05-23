import js from '@eslint/js'
import globals from 'globals'
import ts from 'typescript-eslint'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import parserVue from 'vue-eslint-parser'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

import oxlint from 'eslint-plugin-oxlint'

export default [
  {
    name: 'app/files-to-lint',
    files: [
      'src/*.{ts,mts,tsx,vue}',
      'src/**/*.{ts,mts,tsx,vue}',
      'mock/**/*.{ts,mts,tsx,vue}',
      'library/**/*.{ts,mts,tsx,vue}',
    ],
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      'auto-imports.d.ts',
      'components.d.ts',
      'package.json',
      'functional-helpers/*',
      'functional-helpers /**/*',
      'functional-helpers/*',
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  oxlint.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  skipFormatting,
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
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },

  {
    ignores: [
      'dist/',
      'node_modules/',
      'auto-imports.d.ts',
      'components.d.ts',
      'src/server',
      'functional-helpers/*',
      'functional-helpers /**/*',
      'functional-helpers/*',
    ],
  },
]
