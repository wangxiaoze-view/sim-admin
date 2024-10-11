interface IReviewImage {
    /**
     * @description 图片列表
     */
    urlList: string[];
    /**
     * @description 初始图片索引
     */
    initIndex: number;
}
declare const _default: import('vue').DefineComponent<{}, {
    reviewImages: (visible: boolean, options: IReviewImage) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
export default _default;
