import { NavBarProps } from 'vant';
type TNavProps = NavBarProps & {
    /**
     * @description 背景色
     * @default #fff
     */
    bgColor?: string;
    /**
     * @description 距离顶部状态栏的距离，在移动端中需要间隔状态栏高度
     * @default 0px
     */
    paddingTop?: string;
};
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Partial<TNavProps>>, {
    bgColor: string;
    paddingTop: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "click-left": () => void;
    "click-right": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Partial<TNavProps>>, {
    bgColor: string;
    paddingTop: string;
}>>> & {
    "onClick-left"?: (() => any) | undefined;
    "onClick-right"?: (() => any) | undefined;
}, {
    bgColor: string;
    paddingTop: string;
}, {}>, {
    left?(_: {}): any;
    right?(_: {}): any;
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
