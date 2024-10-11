import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

import AutoImport from 'unplugin-auto-import/rspack'
import Components from 'unplugin-vue-components/rspack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { pluginSass } from '@rsbuild/plugin-sass'

import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  tools: {
    rspack(config, { appendPlugins }) {
      console.log(process.env.RSDOCTOR)
      process.env.RSDOCTOR &&
        appendPlugins(
          new RsdoctorRspackPlugin({
            mode: 'brief',
          })
        )
      appendPlugins(
        AutoImport({
          imports: ['vue', 'vue-router'],
          resolvers: [ElementPlusResolver()],
        })
      )
      appendPlugins(
        Components({
          resolvers: [ElementPlusResolver()],
        })
      )
    },
  },
  source: {
    alias: {
      '~/': './',
      '/@/': './src/',
      '/@mock/': './mock/',
      '/@sim/': './library/',
    },
  },
})
