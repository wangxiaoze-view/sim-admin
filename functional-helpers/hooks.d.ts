import { default as default_2 } from 'currency.js';
import { default as default_3 } from 'ali-oss';
import { Emitter } from 'mitt';
import { EventType } from 'mitt';
import { Ref } from 'vue';

declare interface IHttpResult<T = any> {
    code: string;
    context: T;
    message: string;
    requestId?: string;
    success: boolean;
}

declare interface IResult {
    number: number;
    string: string;
}

declare interface ISpeech {
    text: string;
    lang?: string;
    speechRate?: number;
    volume?: number;
    pitch?: number;
    startCallback?: () => void;
    endCallback?: () => void;
}

declare interface IUseUploadOptions {
    file: File;
    platform?: string;
    isHttps?: boolean;
    success?: (data: IHttpResult) => void;
    error?: (error: IHttpResult) => void;
}

declare interface IWsInit {
    isPermission?: boolean;
    callback?: (data: unknown) => void;
}

declare interface IWsOptions {
    url: string;
    time?: number;
}

export declare type TAppPageOptions = {
    type: TNavigatorAppType;
    url?: string;
    data?: Record<string, unknown>;
};

export declare type TAppPageType = 'goOrderDetail' | 'callPhone' | 'goBail' | 'updateOrderDetails' | 'upLoadVideo' | 'upLoadImg' | 'downloadImg' | 'navHead' | 'goto' | 'login' | 'customerService' | 'gotoProduct' | 'download' | 'appVoice' | 'gotoNavigate' | 'addOrderMemo' | 'editOrderMemo' | 'goHome' | 'goSetWorkerState' | 'goIdCardUpload';

export declare type TNavigatorAppType = 'goto' | 'navHead' | 'download';

declare type TType = 'add' | 'subtract' | 'multiply' | 'divide';

/**
 * @description 金额，数字计算
 * @returns
 */
export declare function useComputedNum(): {
    arithmetic: (type: TType, a: string | number, b?: string | number) => IResult;
    toString: (value: string | number) => string;
    toNumber: (value: string | number) => number;
    custom: (value: string | number, options?: {}) => default_2;
};

export declare type UseLoading = (init: boolean, text?: string) => UseLoadingReturn;

export declare function useLoading(init?: boolean, text?: string): {
    loading: Ref<boolean, boolean>;
    loadingText: Ref<string, string>;
    setLoading: (value: boolean) => void;
    toggleLoading: () => void;
    setLoadingText: (value: string) => void;
};

/**
 * @description 提供加载状态和更改它的函数。
 * @param {boolean} [init=false] 加载指示器的初始状态。
 * @param {string} [text=''] 加载时显示的初始文本。
 * @returns {{ loading: Ref<boolean>, setLoading: (value: boolean) => void, toggleLoading: () => void, setLoadingText: (value: string) => void }}
 */
export declare type UseLoadingReturn = ReturnType<typeof useLoading>;

export declare function useMitter(): {
    emitter: Emitter<Record<EventType, unknown>>;
    simEmit: (event: string, ...args: any[]) => void;
    simEmitOn: (event: string, callback: (...args: any[]) => void) => void;
    simEmitOff: (event: string, callback: (...args: any[]) => void) => void;
    simEmitClear: () => void;
};

export declare function useNavigatorApp(): {
    goAppPage: (type: TAppPageType, options: Record<string, unknown>) => void;
    customGoAppPage: (options: TAppPageOptions) => void;
};

/**
 * @description 语音合成
 * @returns
 */
export declare function useSpeechRecognitionForSimple(): {
    speak: (options: ISpeech) => false | SpeechSynthesisUtterance;
};

/**
 * @description 上传oss
 * @param {IUseUploadOptions} options 上传配置
 * @param {File} options.file 上传的文件
 * @param {string} [options.platform='admin'] 上传的oss平台
 * @param {boolean} [options.isHttps=true] 上传的oss是否使用https
 * @param {(data: IHttpResult) => void} [options.success] 上传成功的回调
 * @param {(error: IHttpResult) => void} [options.error] 上传失败的回调
 * @returns {{ getOssClient: (options?: OSS.Options) => OSS; onUpload: (options: IUseUploadOptions) => void }}
 */
export declare function useUpload(): {
    getOssClient: (options?: default_3.Options) => any;
    onUpload: (options: IUseUploadOptions) => null | undefined;
};

export declare function useWs(options: IWsOptions): {
    ws: Ref<    {
    binaryType: BinaryType;
    readonly bufferedAmount: number;
    readonly extensions: string;
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    readonly protocol: string;
    readonly readyState: number;
    readonly url: string;
    close: (code?: number, reason?: string) => void;
    send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
    addEventListener: {
    <K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    };
    removeEventListener: {
    <K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    };
    dispatchEvent: (event: Event) => boolean;
    } | null, WebSocket | {
    binaryType: BinaryType;
    readonly bufferedAmount: number;
    readonly extensions: string;
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    readonly protocol: string;
    readonly readyState: number;
    readonly url: string;
    close: (code?: number, reason?: string) => void;
    send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
    addEventListener: {
    <K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    };
    removeEventListener: {
    <K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    };
    dispatchEvent: (event: Event) => boolean;
    } | null>;
    initWs: (options: IWsInit) => false | undefined;
};


export * from "@vueuse/core";

export { }
