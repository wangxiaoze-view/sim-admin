import { ETimePeriodType } from '../../enum/time/index';
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
 * @description 时间周期
 * @param type 周期类型
 * @param format 默认 YYYY-MM-DD
 * @returns
 */
export declare function getEnumTimePeriod(type: ETimePeriodType, format?: string): {
    startTime: string;
    endTime: string;
};
