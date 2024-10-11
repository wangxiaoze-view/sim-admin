interface IResizeOptions {
    /**
     * 屏幕高度落差xx不显示底部按钮
     */
    initScrollHeight: number;
}
/**
 *
 * 监听屏幕高度变化，目前支持以下需求：
 * 1. 是否显示底部导航栏
 *
 * ``` js
 * // 如何使用， remote-components包名
 * import { useResize } from 'remote-components/hooks'
 * const { showBottom } = useResize()
 * <button v-if="showBottom">确认提交</button>
 * ```
 *
 * @returns
 */
export default function useResize(options?: IResizeOptions): {
    showBottom: import('vue').Ref<boolean>;
};
export {};
