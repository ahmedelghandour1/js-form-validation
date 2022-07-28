import validator from "validator";
import type { IsEmailOptions } from "validator/lib/isEmail";
export type ValidationParams = {
  touched: boolean;
  valid: boolean;
  dirty: boolean;
  value: any;
  [k: string]: any;
};

export const required = (val: string) => {
  if (val === undefined || val === null || val === "") return false;
  return true;
};
export const email = (val: string) => validator.isEmail(val);
export const emailWithOptions = (options?: IsEmailOptions) => (val: string) =>
  validator.isEmail(val, options);
export const minLength = (length: number) => (val: string) => val.length >= length;

export const maxLength = (length: number) => (val: string) => val.length <= length;

export const hasUpperCase = (val: string) => val.toLowerCase() !== val;
export const hasLowerCase = (val: string) => val.toUpperCase() !== val;
export const hasNumber = (val: string) => !!val.match(/\d+/g);
export const hasSpecialChar = (val: string) => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val);

const handleValidators = (val: string, validators: any) => {
  if (!validator) return;
  let result = {};
  for (const k in validators) {
    result[k] = validators[k](val);
  }
  return result;
};

export default function Validation(
  element: HTMLInputElement,
  validators: Record<string, unknown>,
  callback: (validation: ValidationParams) => void
) {
  if (element === undefined || element === null) {
    throw Error("Element can't be undifiend");
  }

  let val: string,
    validationBase: ValidationParams = {
      value: undefined,
      touched: false,
      get valid() {
        return !Object.values(this.validators).includes(false);
      },
      dirty: false,
    };

  val = element.value;
  validationBase.value = element.value;

  validationBase.validators = handleValidators(val, validators);

  callback && callback(validationBase);

  element.addEventListener("blur", () => {
    validationBase.touched = true;
    validationBase.value = element.value;
    callback && callback(validationBase);
  });

  element.addEventListener("input", (e: Event) => {
    const val = (<HTMLInputElement>e.target).value;
    validationBase.dirty = true;
    validationBase.value = element.value;
    validationBase.validators = handleValidators(val, validators);
    callback && callback(validationBase);
  });

  const makeDirty = () => {
    validationBase.dirty = true;
    validationBase.touched = true;
    callback && callback(validationBase);
  };

  return makeDirty;
}
