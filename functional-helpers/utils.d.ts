import { AxiosInstance } from 'axios';
import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { CreateAxiosDefaults } from 'axios';
import { default as dayjs } from 'dayjs';
import { InternalAxiosRequestConfig } from 'axios';

/**
 * @description 将 Base64 编码的数据转换为 File 对象。
 * @param {string} base64Data - Base64 编码的数据字符串，包含 MIME 类型信息。
 * @param {string} [fileName=''] - 转换后文件的名称。
 * @returns {File} - 从 Base64 数据生成的 JavaScript File 对象。
 */
export declare function base64ToFile(base64Data: string, fileName?: string): File;

/**
 * @description 将数字转换为中文数字
 * @param {number} num -要转换的数字
 * @returns {string} 转换后的中文数字字符串
 * @example
 * convertToChinaNum(12345)
 * // => '二万三千四百五十'
 */
export declare function convertToChinaNum(num: number | string): string;

declare class CreateStorage {
    prefixKey: string;
    storage: Storage;
    constructor(prefixKey?: string, storage?: Storage);
    /**
     * 获取存储的密钥。密钥是前缀和传递的密钥的组合。
     * @param key 钥匙即可获得。
     * @returns 前缀和传递的密钥的组合。
     */
    getKey(key: string): string;
    /**
     * 将值存储到localStorage中。
     * @param key 键名称。
     * @param value 要存储的值。
     * @param expire 有效期限，单位为毫秒。默认为 30 天。
     */
    set(key: string, value: string | unknown, expire?: number): void;
    /**
     * 从localStorage中获取指定键的值。
     * @param key 键名称。
     * @param def 不存在时的默认值。
     * @returns 存储的值，或者不存在时的默认值。
     */
    get(key: string, def?: unknown): any;
    /**
     * @description 从存储中删除指定的密钥。
     * @param key 待移除的钥匙。
     */
    remove(key: string): void;
    /**
     * @description 清除所有存储的数据。
     */
    clear(): void;
    /**
     * @description 将值存储到Cookie中。
     * @param name Cookie名称。
     * @param value 要存储的值。
     * @param expire 有效期限，单位为毫秒。默认为 30 天。
     */
    setCookie(name: string, value: string, expire?: unknown): void;
    /**
     * @description 读取Cookie中指定的值。
     * @param name Cookie名称。
     * @returns 读取的值，如果不存在则返回空字符串。
     */
    getCookie(name: string): string;
    /**
     * @description 删除Cookie中指定的密钥。
     * @param key 待删除的Cookie名称。
     */
    removeCookie(key: string): void;
    /**
     * @description 清除 Cookie 中的所有数据。
     * @example
     * const storage = new CreateStorage()
     * storage.clearCookie()
     */
    clearCookie(): void;
}

export { dayjs }

declare enum ETimePeriodType {
    lastOneMonth = "lastOneMonth",
    lastThreeMonth = "lastThreeMonth",
    lastOneYear = "lastOneYear",
    lastWeek = "lastWeek",
    lastMonth = "lastMonth",
    lastQuarter = "lastQuarter",
    lastYear = "lastYear",
    nearWeek = "nearWeek",
    nearMonth = "nearMonth",
    nearQuarter = "nearQuarter",
    nearYear = "nearYear"
}

/**
 * @description 时间周期
 * @param type 周期类型
 * @param format 默认 YYYY-MM-DD
 * @returns
 */
export declare function getEnumTimePeriod(type: ETimePeriodType, format?: string): {
    startTime: string;
    endTime: string;
};

/**
 * @description 将逗号分隔的字符串转换为字符串数组。如果输入已经是数组，则按原样返回输入。
 * @param {string[] | string} src -逗号分隔的字符串或字符串数​​组。
 * @returns {string[]} 字符串数组。
 * @example
 * ``` ts
 * const result = getHandlerImage('https://a.png,https://b.png,https://c.png');
 * console.log(result); // 输出: ['https://a.png', 'https://b.png', 'https://c.png']
 * const result = getHandlerImage(['https://a.png', 'https://b.png', 'https://c.png']);
 * console.log(result); // 输出: ['https://a.png', 'https://b.png', 'https://c.png']
 * ```
 */
export declare function getHandlerImage(src: string[] | string): string[];

/**
 * @description 获取季度
 * @param format 默认 YYYY-MM-DD
 * @returns
 */
export declare function getQuarter(format?: string): {
    name: string;
    start: string;
    end: string;
}[];

/**
 * @description 获取缩略图的url,可用于阿里oss和七牛云。
 * @param {string} src -原图的url。
 * @param {number} [w=200] -缩略图的宽度。
 * @param {number} [h=200] -缩略图的高度。
 * @param {number} [q=75] -缩略图的质量。
 * @returns {string} 缩略图的url。
 * @example
 * ``` ts
 * const result = getThumbnail('https://a.png', 200, 200, 75);
 * console.log(result); // 输出: 'https://a.png?x-oss-process=image/resize,w_200,h_200,limit_0/quality,q_75'
 * ```
 */
export declare function getThumbnail(src: string, w?: number, h?: number, q?: number): string;

/**
 * @description 获取当前时间, 包含 年月日时分秒周
 * @returns
 */
export declare function getTime(): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    week: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    weekName: string[];
};

/**
 * @description 时间格式化
 * @param time Date
 * @param format 格式化
 * @returns  string
 */
export declare function getTimeFormat(time?: Date, format?: string): string;

/**
 * @description 获取视频的封面图像Base64 url。
 * @param {string} src -视频的url。
 * @returns {Promise<string>} 封面图像的Base64 url。
 * @example
 * ``` ts
 * const result = getVideoCover('https://a.mp4');
 * console.log(result); // 输出: Promise<string>
 * ```
 */
export declare function getVideoCover(src: string): Promise<string>;

/**
 * @description 处理将文本复制到剪贴板的操作，并为不支持的浏览器提供后备方案。
 * @param {THandleClipboardOption} options -剪贴板处理选项，包括要复制的文本以及成功或错误的回调。
 * @returns {void}
 * @example
 * handleClipboard({
 *   text: 'Copy this text',
 *   success: () => console.log('Text copied successfully!'),
 *   error: () => console.error('Failed to copy text.')
 * });
 */
export declare function handleClipboard(options: THandleClipboardOption): void;

/**
 * @description 处理文件大小类型，过滤符合指定类型的文件 URL。
 * @param {TFIleSizeDataType} data - 文件数据，可以是字符串、字符串数组或包含 URL 的对象数组。
 * @param {'image' | 'video' | 'isExcel' | 'isDocs' | 'isPdf' | 'isZip'} type - 要过滤的文件类型。
 * @returns {[string[] | TFileSizeType[], number]} 符合指定类型的文件 URL 数组及其长度。
 */
export declare function handlerFileSize(data: TFIleSizeDataType, type: 'image' | 'video' | 'isExcel' | 'isDocs' | 'isPdf' | 'isZip'): (number | (string | TFileSizeType)[])[];

/**
 * @description 将 HTTP/HTTPS URL 转换为 WebSocket URL (ws/wss)。
 * @param {string} url -要转换的 URL。
 * @returns {string} -转换后的 WebSocket URL。
 * @example
 * handlerUrlToWs('https://abc.com') // 'wss://abc.com'
 * handlerUrlToWs('http://abc.com')  // 'ws://abc.com'
 */
export declare function handlerUrlToWs(url: string): string;

export declare interface IHttpResult<T = any> {
    code: string;
    context: T;
    message: string;
    requestId?: string;
    success: boolean;
}

/**
 * @description
 * 判断是否是安卓系统
 * @returns {boolean} true if is android, false otherwise
 */
export declare function isAndroid(): boolean;

/**
 * @description
 * 检测输入的字符串是否为汉字。
 * @param str - 待检测的字符串。
 * @returns {boolean} - 如果输入的字符串是汉字，则返回 true；否则返回 false。
 * @example
 * isChina('你好')
 * // => true
 * isChina('123')
 * // => false
 */
export declare function isChina(str: string): boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为文档文件 URL。
 * @param src - 要评估的源字符串。
 * @returns {boolean} - 如果源字符串以通用文档文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isDocs('https://a.doc')
 * // => true
 */
export declare function isDocs(src: string): boolean;

/**
 * @description 检测输入的字符串是否为有效的邮箱地址。
 * @param email - 待检测的邮箱地址字符串。
 * @returns {boolean} - 如果输入的字符串是有效的邮箱地址，则返回 true；否则返回 false。
 * @example
 * isEmail('123@qq.com')
 * // => true
 * isEmail('123')
 * // => false
 */
export declare function isEmail(email: string): boolean;

/**
 * @description 检测输入的字符串是否为纯英文字符。
 * @param str - 待检测的字符串。
 * @returns {boolean} - 如果输入的字符串是纯英文字符，则返回 true；否则返回 false。
 * @example
 * isEnglish('abc')
 * // => true
 * isEnglish('123')
 * // => false
 */
export declare function isEnglish(str: string): boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为 Excel 文件 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串以通用 Excel 文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isExcel('https://a.xlsx')
 * // => true
 */
export declare function isExcel(src: string): boolean;

/**
 * @description             是否为外链
 * @param value {字符串} 网址
 * @returns {boolean}
 */
export declare const isExternal: (value: string) => boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为文件 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串以通用文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isFile('https://a.pdf')
 * // => true
 */
export declare function isFile(src: string): boolean;

/**
 * @description 18位身份证号码的正则表达式验证
 * @param value -要测试的值。
 * @returns {boolean} -值是否是身份证号码。
 * @example
 * isIdCard('12345678901234567') // => true
 */
export declare function isIdCard(value: string): boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为图像 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串以通用图像文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isImage('https://a.png')
 * // => true
 */
export declare function isImage(src: string): boolean;

/**
 * @description
 * 判断是否是 IOS 系统
 * @returns {boolean} true if is ios, false otherwise
 */
export declare function isIos(): boolean;

/**
 * @description  检查“ip”是否是一个合法的IP地址。
 * @param {string} ip 要检查的IP地址。
 * @returns {boolean} 如果“ip”是一个合法的IP地址，则返回“true”，否则返回“false”。
 * @example
 *
 * isIP('192.168.1.1')
 * // => true
 *
 * isIP('256.1.1.1')
 * // => false
 */
export declare function isIP(ip: string): boolean;

/**
 * @description 判断输入的字符串是否为有效的 JSON 字符串。
 * @param str - 待检测的字符串。
 * @returns {boolean} - 如果输入的字符串是有效的 JSON 字符串，则返回 true；否则返回 false。
 * @example
 * isJson('123')
 * // => false
 * isJson('{"a": 1}')
 * // => true
 */
export declare function isJson(str: string): boolean;

/**
 * @description  检查“value”是否是小写字符串。
 * @param {string} value 要检查的值。
 * @returns {boolean} 如果“value”是小写字符串，则返回“true”，否则返回“false”。
 * @example
 *
 * isLowerCase('abc')
 * // => true
 *
 * isLowerCase('aBc')
 * // => false
 */
export declare function isLowerCase(value: string): boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为 PDF 文件 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串以通用 PDF 文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isPdf('https://a.pdf')
 * // => true
 */
export declare function isPdf(src: string): boolean;

/**
 * @description 判断是否是手机号码
 * @param str 输入的手机号
 * @returns {boolean} 如果输入的字符串是有效的手机号码则返回 true，否则返回 false
 * @example
 * isPhone('12345678901')
 * // => true
 * isPhone('123')
 * // => false
 */
export declare function isPhone(str: string): boolean;

/**
 * @description 判断是否是端口号
 * @param value -要测试的值。
 * @returns {boolean} -值是否是端口号。
 * @example
 * isPort('80') // => true
 */
export declare function isPort(value: string): boolean;

/**
 * @description  检查浏览器是否支持语音合成。
 * @returns {boolean} 如果浏览器支持语音合成，则返回“true”，否则返回“false”。
 */
export declare function isSpeechSupport(): {
    new (text?: string): SpeechSynthesisUtterance;
    prototype: SpeechSynthesisUtterance;
};

/**
 * @description  检查“value”是否是大写字符串。
 * @param {string} value 要检查的值。
 * @returns {boolean} 如果“value”是大写字符串，则返回“true”，否则返回“false”。
 * @example
 *
 * isUpperCase('ABC')
 * // => true
 *
 * isUpperCase('aBc')
 * // => false
 */
export declare function isUpperCase(value: string): boolean;

/**
 * @description 确定给定的源字符串是否是 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串是 URL，则返回 true，否则返回 false。
 * @example
 * isUrl('https://example.com')
 * // => true
 */
export declare function isUrl(src: string): boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为视频 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串以通用视频文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isVideo('https://a.mp4')
 * // => true
 */
export declare function isVideo(src: string): boolean;

/**
 * @description  检查浏览器是否支持 WebSocket。
 *
 * @returns {boolean} 如果浏览器支持 WebSocket，则返回“true”，否则返回“false”。
 */
export declare function isWsSupport(): boolean;

/**
 * @description 根据扩展名确定给定的源字符串是否为压缩包 URL。
 * @param src -要评估的源字符串。
 * @returns {boolean} -如果源字符串以通用压缩包文件扩展名结尾，则返回 true，否则返回 false。
 * @example
 * isZip('https://a.zip')
 * // => true
 */
export declare function isZip(src: string): boolean;

declare class Logger {
    constructor();
    static prettyLog(title: string, text: string, color: string): void;
    static logCaller(): string | undefined;
    static init(title: string, content: string, defaultTip: string): {
        _title: string;
        _text: string;
    };
    /**
     * @description 打印日志信息。
     * @param title -日志的标题。如果内容为空，则使用标题作为日志内容。
     * @param content -日志的内容。如果内容为空，则使用标题作为日志内容。
     * @example
     * ``` ts
     * logger.log('title', 'content')
     * ```
     */
    log(title: string, content?: string): void;
    /**
     * @description 打印错误日志信息。
     * @param title -日志的标题。如果内容为空，则使用标题作为日志内容。
     * @param content -日志的内容。如果内容为空，则使用标题作为日志内容。
     * @example
     * ``` ts
     * logger.error('title', 'content')
     * ```
     */
    error(title: string, content?: string): void;
    /**
     * @description 打印警告日志信息。
     * @param title -日志的标题。如果内容为空，则使用标题作为日志内容。
     * @param content -日志的内容。如果内容为空，则使用标题作为日志内容。
     * @example
     * ``` ts
     * logger.warn('title', 'content')
     * ```
     */
    warn(title: string, content?: string): void;
    /**
     * @description 打印调试日志信息。
     * @param content -日志的内容。如果不传递任何参数，则打印 'Debug'。
     * @example
     * ``` ts
     * logger.debug('content')
     * ```
     */
    debug(content?: string): void;
    /**
     * @description 从指定的 URL 加载图像，并在控制台中以该图像作为背景记录一条样式消息。
     * @param url -要加载的图像的 URL。
     * @param scale -应用于控制台显示的图像尺寸的比例因子。默认值为 1。
     */
    img(url: string, scale?: number): void;
}

export declare const logger: Logger;

/**
 * @description             密码强度校验 例如："AnBangKe666!!!" ===> true
 * @param pass {String}     校验的字符串
 * @returns {boolean}
 */
export declare function passIntensity(pass: string): boolean;

declare class Request_2 {
    instance: AxiosInstance | null;
    baseConfig: AxiosRequestConfig;
    constructor(config?: CreateAxiosDefaults);
    interceptorsRequest(success?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig, error?: (error: unknown) => void): void;
    interceptorsResponse(success?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig, error?: (error: unknown) => void): void;
    request(config: InternalAxiosRequestConfig): Promise<AxiosResponse>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<IHttpResult<T>>;
    post<T = any, U = any>(url: string, data?: U, config?: InternalAxiosRequestConfig): Promise<IHttpResult<T>>;
    put<T = any, U = any>(url: string, data?: U, config?: InternalAxiosRequestConfig): Promise<IHttpResult<T>>;
    delete<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<IHttpResult<T>>;
}
export { Request_2 as Request }

declare const Storage_2: CreateStorage;
export { Storage_2 as Storage }

declare type TFIleSizeDataType = string | string[] | TFileSizeType[];

declare type TFileSizeType = {
    url: string;
    [k: string]: unknown;
};

export declare type THandleClipboardOption = {
    text: string;
    success?: () => void;
    error?: () => void;
};


export * from "lodash-es";

export { }
