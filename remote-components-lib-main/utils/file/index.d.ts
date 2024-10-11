/**
 * @description 图片地址处理
 * @param src {string[] | string} 图片的地址, 支持字符串数组或者字符串
 * @returns {string[]}
 */
export declare function getHandlerImage(src: string[] | string): string[];
/**
 * @description 获取视频第一帧数
 * @param src 视频地址
 * @returns {Promise<string>} 视频封面地址
 */
export declare function getVideoCover(src: string): Promise<string>;
/**
 * @description 图片缩略图, 目前支持 阿里oss 和 七牛
 * @param src 图片地址
 * @param w 宽
 * @param h 高
 * @param q 清晰度
 * @returns {string}
 */
export declare function getThumbnail(src: string, w?: number, h?: number, q?: number): string;
