import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { pluginSass } from '@rsbuild/plugin-sass'

// rsdoctor
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'
// mock
import { pluginMockServer } from 'rspack-plugin-mock/rsbuild'

// 图片压缩
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'
// css压缩
import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer'
// css兼容
import postcssEnv from 'postcss-preset-env'
// gzip 插件
import CompressionPlugin from 'compression-webpack-plugin'

import { settings_config } from './src/config'
const { title, linkIcon, description, copyright } = settings_config

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass(),
    pluginImageCompress(),
    pluginCssMinimizer(),
    pluginMockServer({
      log: true,
      prefix: '/api',
      build: {
        // 将mock数据打包到生产环境
        dist: `${process.cwd()}/mockServer`,
        serverPort: 3003,
      },
    }),
  ],
  tools: {
    lightningcssLoader: false,
    postcss(opts) {
      // @ts-expect-error TS2339
      opts.postcssOptions?.plugins?.push(
        postcssEnv({
          autoprefixer: {
            grid: true,
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
          },
        })
      )
    },
    rspack(config, { appendPlugins }) {
      process.env.RSDOCTOR &&
        appendPlugins(
          new RsdoctorRspackPlugin({
            mode: 'brief',
          })
        )
      appendPlugins(
        AutoImport({
          imports: ['vue', 'vue-router', 'pinia'],
          resolvers: [ElementPlusResolver()],
        })
      )
      appendPlugins(
        Components({
          resolvers: [ElementPlusResolver()],
        })
      )

      appendPlugins(new CompressionPlugin())
    },
  },
  dev: {
    lazyCompilation: true,
  },
  source: {
    alias: {
      '~/': './',
      '/@/': './src/',
      '/@mock/': './mock/',
      '/@sim/': './library/',
    },
  },
  output: {
    // 打包资源不去内联
    // inlineScripts: false,
    // inlineStyles: false,
    sourceMap: { js: process.env.NODE_ENV === 'development' ? 'eval' : false },
    polyfill: 'usage',
  },
  performance: {
    chunkSplit: {
      // 通过 forceSplitting 配置拆分的 chunk 会通过 <script> 标签插入到 HTML 文件中，作为首屏请求的资源
      // forceSplitting: {
      //   axios: /node_modules[\\/]vue-axios/,
      //   lodash: /node_modules[\\/]lodash-es/,
      //   vue: /node_modules[\\/]vue[\\/]/,
      //   'vue-router': /node_modules[\\/]vue-router[\\/]/,
      //   'element-plus': /node_modules[\\/]element-plus[\\/]/,
      //   pinia: /node_modules[\\/]pinia[\\/]/,
      //   remixicon: /node_modules[\\/]remixicon[\\/]/,
      // },
      // override: {
      //   chunks: 'all',
      //   minSize: 20000,
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name(module: any) {
      //         let packageName = 'vendors'
      //         // 匹配/node_modules/.pnpm/, 因为固定式pnpm安装的
      //         const reg = /[\\/]node_modules[\\/].pnpm\/(.*?)([\\/]|$)/
      //         if (reg.test(module.context)) {
      //           packageName = module.context.match(reg)[1]
      //         }
      //         return `chunk-${packageName.replace('@', '')}`
      //       },
      //       priority: 10,
      //       reuseExistingChunk: true,
      //       enforce: true,
      //     },
      //     default: {
      //       reuseExistingChunk: true,
      //       priority: -10,
      //       enforce: true,
      //     },
      //   },
      // },
    },
  },
  server: {
    compress: true,
    ...(!isProduction
      ? {
          proxy: {
            '/api': 'http://localhost:3000',
          },
        }
      : {}),
  },
  html: {
    title,
    favicon: linkIcon,
    meta: {
      description,
      copyright,
    },
  },
})
