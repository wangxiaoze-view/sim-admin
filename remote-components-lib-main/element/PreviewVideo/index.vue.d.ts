/**
 * @description 具体参数详看西瓜播放器 https://h5player.bytedance.com/guide/#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8
 */
interface IVideoPlayerProps {
    url: string;
    id?: string;
    lang?: 'zh';
    volume?: number;
    autoplay?: boolean;
    screenShot?: boolean;
    playbackRate?: number[];
    fluid?: boolean;
}
declare const _default: import('vue').DefineComponent<{}, {
    setVisible: (val: boolean, playerConfig: IVideoPlayerProps) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
export default _default;
