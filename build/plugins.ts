import {
  AutoImport,
  cli_buildGzip,
  Components,
  CompressionPlugin,
  ElementPlusResolver,
  pluginCssMinimizer,
  pluginImageCompress,
  pluginModuleFederation,
  pluginSass,
  pluginVue,
  RsdoctorRspackPlugin,
} from './libs'

export const IsProduction = process.env.NODE_ENV === 'production'

export const IsRsDoctor = process.env.RSDOCTOR === 'true'

export const Plugins = [
  pluginVue(),
  pluginSass(),
  pluginImageCompress(),
  pluginCssMinimizer(),
  pluginModuleFederation(
    {
      name: 'host-rsbuild',
      remotes: {
        shared: process.env.APP_REMOTE as string,
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: '^3.0.0',
          eager: true,
        },
        'element-plus': {
          singleton: true,
          requiredVersion: '^2.0.0',
          eager: true,
        },
      },
      shareStrategy: 'loaded-first',
    },
    {}
  ),
]

export const RsPackPlugins = [
  IsRsDoctor ? new RsdoctorRspackPlugin({ mode: 'brief' }) : null,
  AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    resolvers: [ElementPlusResolver()],
    dts: true,
  }),
  Components({
    dirs: ['src/components', 'library/components'],
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass', // 使用 sass 样式
      }),
    ],
    dts: true,
    // 确保所有组件都能被正确解析
    include: [/\.vue$/, /\.vue\?vue/],
  }),
  cli_buildGzip
    ? new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      })
    : null,
].filter(Boolean)
