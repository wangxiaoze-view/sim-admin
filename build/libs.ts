export { defineConfig, type PostCSSOptions, type ToolsConfig } from '@rsbuild/core'

// 插件
export { pluginVue } from '@rsbuild/plugin-vue'
export { pluginSass } from '@rsbuild/plugin-sass'
export { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'
export { pluginImageCompress } from '@rsbuild/plugin-image-compress'
export { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer'
import postcssEnv from 'postcss-preset-env'
import CompressionPlugin from 'compression-webpack-plugin'
export { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
export { postcssEnv, CompressionPlugin }

import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
export { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export { AutoImport, Components }
