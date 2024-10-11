interface ISearchType {
    searchKey: string;
    searchLabel: string;
    searchValue: string;
}
type TCallbackType = (value: {
    [k: string]: string;
}) => void;
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToOption<{
    searchList: ISearchType[];
}>, {
    setLimit: (type: boolean) => void;
    pushChange: (item: ISearchType, callback: TCallbackType, receiveText?: string) => void;
    resetSearch: () => void;
    clearText: () => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "emit-search": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToOption<{
    searchList: ISearchType[];
}>>> & {
    "onEmit-search"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
