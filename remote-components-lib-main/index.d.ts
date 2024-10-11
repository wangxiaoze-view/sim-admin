import { default as EleLazyImage } from './element/LazyImage/index.vue';
import { default as ElePreviewImage } from './element/PreviewImage/index.vue';
import { default as ElePreviewVideo } from './element/PreviewVideo/index.vue';
import { default as EleVideoPlayer } from './element/VideoPlayer/index.vue';
import { default as EleAmountText } from './element/AmountText/index.vue';
import { default as ElePulldownSelect } from './element/PulldownSelect/index.vue';
import { default as RePlateIcon } from './element/PlateIcon/index.vue';
import { default as ReVantNavBar } from './vant/NavBar/index.vue';
import { default as ReVantEmpty } from './vant/Empty/index.vue';
export { EleLazyImage, ElePreviewImage, ElePreviewVideo, EleVideoPlayer, EleAmountText, ElePulldownSelect, RePlateIcon, ReVantNavBar, ReVantEmpty };
declare module 'vue' {
    interface GlobalComponents {
        EleLazyImage: (typeof import('./element/LazyImage/index.vue'))['default'];
        ElePreviewImage: (typeof import('./element/PreviewImage/index.vue'))['default'];
        ElePreviewVideo: (typeof import('./element/PreviewVideo/index.vue'))['default'];
        EleVideoPlayer: (typeof import('./element/VideoPlayer/index.vue'))['default'];
        EleAmountText: (typeof import('./element/AmountText/index.vue'))['default'];
        ElePulldownSelect: (typeof import('./element/PulldownSelect/index.vue'))['default'];
        RePlateIcon: (typeof import('./element/PlateIcon/index.vue'))['default'];
        ReVantNavBar: (typeof import('./vant/NavBar/index.vue'))['default'];
        ReVantEmpty: (typeof import('./vant/Empty/index.vue'))['default'];
    }
}
