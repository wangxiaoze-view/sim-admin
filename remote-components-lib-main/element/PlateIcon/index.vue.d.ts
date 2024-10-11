type TProps = '404' | '502' | 'add_address' | 'bind_card' | 'bind' | 'loading' | 'mapping' | 'message_list' | 'network_interruption' | 'no_message' | 'no_meeting' | 'no_order' | 'no_permission' | 'no_products' | 'no_task' | 'pass' | 'save_success' | 'search' | 'warning';
interface IProps {
    icon: TProps;
    width?: string;
    height?: string;
}
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    icon: string;
    width: string;
    height: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<IProps>, {
    icon: string;
    width: string;
    height: string;
}>>>, {
    width: string;
    height: string;
    icon: TProps;
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
