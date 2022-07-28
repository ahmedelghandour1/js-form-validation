import type { IsEmailOptions } from "validator/lib/isEmail";
export declare type ValidationParams = {
    touched: boolean;
    valid: boolean;
    dirty: boolean;
    value: any;
    [k: string]: any;
};
export declare const required: (val: string) => boolean;
export declare const email: (val: string) => boolean;
export declare const emailWithOptions: (options?: IsEmailOptions) => (val: string) => boolean;
export declare const minLength: (length: number) => (val: string) => boolean;
export declare const maxLength: (length: number) => (val: string) => boolean;
export declare const hasUpperCase: (val: string) => boolean;
export declare const hasLowerCase: (val: string) => boolean;
export declare const hasNumber: (val: string) => boolean;
export declare const hasSpecialChar: (val: string) => boolean;
export default function Validation(element: HTMLInputElement, validators: Record<string, unknown>, callback: (validation: ValidationParams) => void): () => void;
