import { FormItemProp, FormValidateCallback } from 'element-plus';
import { Arrayable } from 'element-plus/lib/utils/typescript.js';
/**
 * @description 表单的hooks
 * @param rulesConfig 表单的规则
 * @returns 返回表单的ref
 */
export default function useEleForm(rulesConfig: any): {
    formRef: import('vue').Ref<({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly inline: boolean;
            readonly disabled: boolean;
            readonly labelWidth: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
        }> & Omit<{
            readonly labelPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
            readonly requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelWidth: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelSuffix: string;
            readonly inline: boolean;
            readonly inlineMessage: boolean;
            readonly statusIcon: boolean;
            readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
            readonly disabled: boolean;
            readonly model?: Record<string, any> | undefined;
            readonly rules?: Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>> | undefined;
            readonly scrollIntoViewOptions?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown> | undefined;
            readonly size?: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown> | undefined;
            onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, "labelPosition" | "requireAsteriskPosition" | "labelWidth" | "labelSuffix" | "inline" | "inlineMessage" | "statusIcon" | "showMessage" | "validateOnRuleChange" | "hideRequiredAsterisk" | "scrollToError" | "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "validate", prop: FormItemProp, isValid: boolean, message: string) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, {
            validate: (callback?: FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
            validateField: (props?: import('element-plus/es/utils/typescript.mjs').Arrayable<FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
            resetFields: (props?: import('element-plus/es/utils/typescript.mjs').Arrayable<FormItemProp> | undefined) => void;
            clearValidate: (props?: import('element-plus/es/utils/typescript.mjs').Arrayable<FormItemProp> | undefined) => void;
            scrollToField: (prop: FormItemProp) => void;
            fields: import('element-plus').FormItemContext[];
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            validate: (prop: FormItemProp, isValid: boolean, message: string) => void;
        }, string, {
            readonly inline: boolean;
            readonly disabled: boolean;
            readonly labelWidth: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: (cleanupFn: () => void) => void) => any : (args_0: any, args_1: any, args_2: (cleanupFn: () => void) => void) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Omit<Readonly<import('vue').ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: {
            readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly labelPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
        readonly requireAsteriskPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
        readonly labelWidth: import('element-plus/es/utils/index.mjs').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly labelSuffix: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly hideRequiredAsterisk: BooleanConstructor;
        readonly scrollToError: BooleanConstructor;
        readonly scrollIntoViewOptions: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
    }, "validate" | "validateField" | "resetFields" | "clearValidate" | "scrollToField" | "fields"> & import('vue').ShallowUnwrapRef<{
        validate: (callback?: FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
        validateField: (props?: import('element-plus/es/utils/typescript.mjs').Arrayable<FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
        resetFields: (props?: import('element-plus/es/utils/typescript.mjs').Arrayable<FormItemProp> | undefined) => void;
        clearValidate: (props?: import('element-plus/es/utils/typescript.mjs').Arrayable<FormItemProp> | undefined) => void;
        scrollToField: (prop: FormItemProp) => void;
        fields: import('element-plus').FormItemContext[];
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
        };
    }) | undefined>;
    rules: import('vue').Ref<Partial<Record<string, import('element-plus/es/utils/typescript.mjs').Arrayable<import('element-plus').FormItemRule>>>>;
    validate: (callback?: (valid: boolean) => void) => void;
    validateField: (props?: Arrayable<FormItemProp> | undefined, callback?: FormValidateCallback | undefined) => void;
    resetFields: (props?: Arrayable<FormItemProp> | undefined) => void;
    scrollToField: (prop: FormItemProp) => void;
    clearValidate: (props?: Arrayable<FormItemProp> | undefined) => void;
};
