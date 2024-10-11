/**
 * @description 是否为图片
 * @param src 图片的地址
 * @returns {boolean}
 */
export declare function isImage(src: string): boolean;
/**
 * @description 是否是视频
 * @param src 视频的地址
 * @returns {boolean}
 */
export declare function isVideo(src: string): boolean;
/**
 * @description 判断是否为文件
 * @param src
 * @returns
 */
export declare function isFile(src: string): boolean;
/**
 * @description 判断是否为url
 * @param src
 * @returns
 */
export declare function isUrl(src: string): boolean;
/**
 * @description 判断是否是安卓系统
 * @returns
 */
export declare function isAndroid(): boolean;
/**
 * @description 判断是否是苹果系统
 * @returns
 */
export declare function isIos(): boolean;
/**
 * @description 判断是否是手机号码
 * @param str 输入的手机号
 * @returns
 */
export declare function isPhone(str: string): boolean;
/**
 * @description 检测是否 为纯数字
 * @param number {Number | String}  数字 可以为整形数字，也可以为字符串数字
 * @returns
 */
export declare function isNumber(number: string): boolean;
/**
 * @description 检测是否为邮箱
 * @param email 邮箱
 * @returns
 */
export declare function isEmail(email: string): boolean;
/**
 * @description 判断是否为中文
 * @param str 待检测的字符串
 * @returns
 */
export declare function isChina(str: string): boolean;
/**
 * @description 判断是否为英文
 * @param str 待检测的字符串
 * @returns
 */
export declare function isEnglish(str: string): boolean;
/**
 * @description 判断是否为json字符串
 * @param str json字符串
 * @returns
 */
export declare function isJson(str: string): boolean;
/**
 * @description 判断是否为空
 * @param value 待检测的值
 * @returns
 */
export declare function isEmpty(value: any): boolean;
/**
 * @description 判断是否是身份证号
 * @param value
 * @returns
 */
export declare function isIdCard(value: string): boolean;
/**
 * @description 判断是否是端口号
 * @param value
 * @returns boolean
 */
export declare function isPort(value: string): boolean;
/**
 * @description 判断是否是数组
 * @param arg
 */
export declare function isArray(arg: any): boolean;
/**
 * @description 判断是否是字符串
 * @param value
 * @returns
 */
export declare function isString(value: any): boolean;
/**
 * @description 判断是否是小写字母
 * @param value
 * @returns
 */
export declare function isLowerCase(value: string): boolean;
/**
 * @description 判断是否是大写字母
 * @param value
 * @returns
 */
export declare function isUpperCase(value: string): boolean;
/**
 * @description 判断是否为IP
 * @param ip
 * @returns
 */
export declare function isIP(ip: string): boolean;
