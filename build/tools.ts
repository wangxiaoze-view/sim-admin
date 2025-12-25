import { postcssEnv, type ToolsConfig, type PostCSSOptions } from './libs'
import { RsPackPlugins } from './plugins'
export default {
  lightningcssLoader: false,
  postcss: (options) => {
    ;(options.postcssOptions as PostCSSOptions)?.plugins?.push(postcssEnv())
  },
  // rspack: {
  //   plugins: RsPackPlugins,
  // },
  rspack: (_, { appendPlugins }) => {
    appendPlugins(RsPackPlugins)
  },
} as ToolsConfig
