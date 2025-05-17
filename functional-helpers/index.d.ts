declare class InitHelpers {
    static isLogger: boolean;
    static isDebug: boolean;
    static vueVersion: string;
    /**
     * @description  构造函数。  日志上报：https://www.fundebug.com/
     * @param {IOptions} options  选项。
     * @property {boolean} [isLogger=false]  是否允许调试日志。
     * @property {boolean} [isDebug=false]  是否允许调试消息。
     * //@property {boolean} [isRevideo=false]  是否允许录制屏幕。由于涉及用户隐私，将不会开放！
     * @property {TVueVersion} [vueVersion='v3']  Vue 的版本。
     * @property {((install: any) => void) | undefined} [install]  安装 Fundebug-Vue 的功能。
     */
    constructor(options: IOptions);
    /**
     * @description  安装 Fundebug-Vue。
     * @returns  {FundebugVue | null} Fundebug-Vue 的实例对象。
     * @remarks
     *  1. 请确保 `InitHelpers.isDebug` 为 `true`。
     *  2. 请确保 `InitHelpers.vueVersion` 在 `['v2', 'v3']` 中。
     *  3. 请确保环境变量 `VITE_DEBUG_API_KEY` 有效。
     */
    installFundebugVue(apikey: string): any;
}
export default InitHelpers;

declare interface IOptions {
    isLogger?: boolean;
    isDebug?: boolean;
    apikey: string;
    vueVersion?: TVueVersion;
    install?: (install: any) => void;
}

declare type TVueVersion = 'v2' | 'v3';

export { }
