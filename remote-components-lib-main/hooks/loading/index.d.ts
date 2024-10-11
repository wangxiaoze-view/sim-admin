/**
 * @description loading
 * @param init 初始值
 * @returns loading, setLoading, toggleLoading
 */
export default function useLoading(init?: boolean, text?: string): {
    loading: import('vue').Ref<boolean>;
    setLoading: (value: boolean) => void;
    toggleLoading: () => void;
    setLoadingText: (value: string) => void;
};
