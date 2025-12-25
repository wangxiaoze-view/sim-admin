import { defineConfig } from './libs'
import { IsProduction, Plugins } from './plugins'
import tools from './tools'
import { settings, cli } from '../src/config'

const { title, linkIcon, description, copyright } = settings

export default defineConfig(() => {
  const buildTime = Date.now()
  return {
    plugins: Plugins,
    tools,
    dev: { lazyCompilation: true },
    source: {
      define: {
        __BUILD_TIME__: JSON.stringify(buildTime),
      },
    },
    resolve: {
      alias: {
        '~/': './',
        '/@/': './src/',
        '/@mock/': './mock/',
        '/@sim/': './library/',
      },
    },
    output: {
      distPath: { root: cli.cli_outputDit },
      sourceMap: false,
      polyfill: 'usage',
    },
    performance: {
      buildCache: IsProduction,
      chunkSplit: {
        forceSplitting: {
          axios: /node_modules[\\/]vue-axios/,
          lodash: /node_modules[\\/]lodash-es/,
          vue: /node_modules[\\/]vue[\\/]/,
          'vue-router': /node_modules[\\/]vue-router[\\/]/,
          'element-plus': /node_modules[\\/]element-plus[\\/]/,
          pinia: /node_modules[\\/]pinia[\\/]/,
          remixicon: /node_modules[\\/]remixicon[\\/]/,
        },
        override: {
          chunks: 'all',
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module: any) {
                let packageName = 'vendors'
                // 匹配/node_modules/.pnpm/, 因为固定式pnpm安装的
                const reg = /[\\/]node_modules[\\/].pnpm\/(.*?)([\\/]|$)/
                if (reg.test(module.context)) {
                  packageName = module.context.match(reg)[1]
                }
                return `chunk-${packageName.replace('@', '')}`
              },
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            default: {
              reuseExistingChunk: true,
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    },
    server: {
      base: '/admin/',
      port: cli.cli_port,
      host: cli.cli_host,
      compress: true,
    },
    html: {
      template: './public/index.html',
      title,
      favicon: linkIcon,
      meta: {
        description,
        copyright,
        buildTime: `${buildTime}`,
      },
    },
  }
})
