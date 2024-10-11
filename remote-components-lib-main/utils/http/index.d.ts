import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';
export interface IHttpResult<T = any> {
    code?: string;
    context?: T;
    message?: string;
    requestId?: string;
    success?: boolean;
}
interface IExtend<T = any> extends IHttpResult<T> {
}
/**
 *
 * ``` js
 * // 这里配置您的axios配置
 * const http = new Request({baseURL: '', timeout: 60000})
 *
 *
 * // 请求拦截
 * http.initRequestUse((config) => {
 *    config.headers.token = '123'
 *    return config
 * })
 *
 * // 响应拦截，俩个参数
 * http.initResponseUse(（data）=> {
 *   // 成功拦截，例如：登录失效等
 *   if (response.data === '0000') {
 *     return response
 *   } else if (response.data === '0001') {
 *     return Promise.reject(response)
 *   }
 *   return response.data
 * }, (error) => {
 *   //  错误拦截
 *   return Promise.reject(error)
 * })
 *
 * http.get('/api/test').then((res) => {})
 * ```
 */
export default class Request {
    instance: AxiosInstance;
    baseConfig: AxiosRequestConfig;
    /**
     * @description 初始化 axios的配置。例如：请求接口，请求超时等等。
     * @param config
     */
    constructor(config?: CreateAxiosDefaults);
    initRequestUse(useConfigCallBack: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig): void;
    /**
     * @description 响应拦截
     * @param successCallBack 响应成功的操作， 例如：弹窗提示登录失效
     * @param errorCallBack 相应失败的操作, 例如：弹窗提示开小差
     */
    initResponseUse(successCallBack: (response: AxiosResponse) => any, errorCallBack?: (error: AxiosError) => any): void;
    /**
     * @description 用于扩展请求
     * @param config 请求配置
     * @returns
     */
    request(config: AxiosRequestConfig): Promise<AxiosResponse>;
    /**
     * @description get请求
     * @param url 请求地址
     * @param config 请求配置
     * @returns
     */
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<IExtend<T>>;
    /**
     * @description post请求
     * @param data 请求参数
     * @param url 请求地址
     * @param config 请求配置
     * @returns
     */
    post<T, U = any>(url: string, data: U, config?: AxiosRequestConfig): Promise<IExtend<T>>;
    /**
     * @description put请求
     * @param data 请求参数
     * @param url 请求地址
     * @param config 请求配置
     * @returns
     */
    put<T, U = any>(url: string, data: U, config?: AxiosRequestConfig): Promise<IExtend<T>>;
    /**
     * @description delete请求
     * @param url 请求地址
     * @param config 请求配置
     * @returns
     */
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<IExtend<T>>;
}
export {};
