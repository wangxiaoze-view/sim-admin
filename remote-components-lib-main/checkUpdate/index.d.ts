interface IOptions {
    pkg: Record<string, any>;
    pluginPkg: Record<string, any>;
    dir: string;
    include?: string[];
    exclude?: string[];
    mode?: string;
}
/**
 *
 * ``` js
 * interface IOptions {
 *    // 项目的package.json 必填
 *    pkg: Record<string, any>
 *    // 插件包package.json 必填
 *    pluginPkg: Record<string, any>
 *    // 插件安装的目录 必填
 *    dir: string
 *    // 需要更新的包，例如： ['vue', 'element-plus']
 *    include?: string[]
 *    // 排除的依赖 例如：['vant'], 您的项目中引入了插件chalk，但是插件也使用了chalk，那么排除掉chalk，避免出现循环依赖；
 *    // 当然插件是继承您项目的一些依赖；
 *    // 而这个时候排除的chalk是插件的chalk，而插件使用chalk就是您项目中的chalk其他依赖
 *    exclude?: string[]
 *    // 开发环境， 目前只考虑开发环境，生产环境设计到打包部署
 *    mode?: string
 * }
 * ```
 */
export default function checkUpdate(options: IOptions): Promise<void>;
export {};
