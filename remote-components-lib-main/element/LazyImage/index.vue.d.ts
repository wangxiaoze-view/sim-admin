interface ILazyImageProps {
    /**
     * @description 图片地址, 支持字符串数组 或 字符串
     */
    image: string[] | string;
    /**
     * @description 是否启用懒加载
     */
    isLazy?: boolean;
    /**
     * @description 自定义图片或者视频样式
     */
    style?: any;
    /**
     * @description 限制展示的数量, 默认展示9
     */
    limit?: number;
    /**
     * @description 超出数量展示类型
     */
    exceedType?: 'default' | 'number';
    /**
     * @description 是否开启预览
     */
    isPreview?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ILazyImageProps>, {
    isLazy: boolean;
    limit: number;
    exceedType: string;
    style: {
        width: string;
        height: string;
    };
    isPreview: boolean;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ILazyImageProps>, {
    isLazy: boolean;
    limit: number;
    exceedType: string;
    style: {
        width: string;
        height: string;
    };
    isPreview: boolean;
}>>>, {
    style: any;
    isLazy: boolean;
    exceedType: "number" | "default";
    limit: number;
    isPreview: boolean;
}, {}>, {
    exceedType?(_: {}): any;
}>;
export default _default;

type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
