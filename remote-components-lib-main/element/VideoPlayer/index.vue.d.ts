interface IVideoPlayerProps {
    config: any;
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IVideoPlayerProps>, {
    config: {
        id: string;
        url: string;
    };
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    player: (player: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IVideoPlayerProps>, {
    config: {
        id: string;
        url: string;
    };
}>>> & {
    onPlayer?: ((player: any) => any) | undefined;
}, {
    config: any;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
