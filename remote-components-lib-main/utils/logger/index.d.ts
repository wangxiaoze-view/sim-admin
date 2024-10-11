/**
 * 日志工具类
 * ```js
 * // 引入
 * import {log} from 'remote-components/utils'
 * // 调试
 * log.debug('hello world')
 * // 日志
 * log.log('hello world', '123')
 * // 错误
 * log.error('hello world', '123')
 * // 警告
 * log.warn('hello world', '123')
 * // 图片
 * log.img('https://picsum.photos/300')
 * ```
 */
declare class Logger {
    constructor();
    static isEmpty(value: any): boolean;
    static prettyLog(title: string, text: string, color: string): void;
    static logCaller(): string | undefined;
    static init(title: string, content: string, defaultTip: string): {
        _title: string;
        _text: string;
    };
    log(title: string, content?: string): void;
    error(title: string, content?: string): void;
    warn(title: string, content?: string): void;
    debug(content?: string): void;
    img(url: string, scale?: number): void;
}
declare const log: Logger;
export default log;
