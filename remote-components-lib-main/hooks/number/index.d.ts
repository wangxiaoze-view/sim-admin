import { default as currency } from 'currency.js';
interface IResult {
    number: number;
    string: string;
}
type TType = 'add' | 'subtract' | 'multiply' | 'divide';
/**
 * @description 金额，数字计算
 * @returns
 */
export default function useComputedNum(): {
    arithmetic: (type: TType, a: string | number, b?: string | number) => IResult;
    toString: (value: string | number) => string;
    toNumber: (value: string | number) => number;
    custom: (value: string | number, options?: {}) => currency;
};
export {};
