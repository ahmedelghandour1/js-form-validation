import { ValidationParams } from "./validation";

const messages = {
  required: "this field is required",
  email: "invalid email format",
  minLength: "8+ characters",
  hasLowerCase: "lowercase letter",
  hasUpperCase: "uppercase letter",
  hasNumber: "number",
  hasSpecialChar: "special character",
};

const createElement = (message: string, options: { valid: boolean; permanent: boolean }) => {
  const DIV = document.createElement("div");

  const display = options.permanent || !options.valid ? "flex" : "none";
  DIV.innerHTML = /** html */ `
    <div style="
    display: ${display}; 
    align-items: center;
    line-height: var(--line-height)">
        <span style="
        color: ${options?.valid ? "#009E2D" : "#9E0000"};
        margin-right: 4px">${options.valid ? "✔︎" : "✘"} </span>
        <span>${message}</span>
    </div>
    `;

  return DIV;
};

export const renderValidators = (
  validationParams: ValidationParams,
  input: HTMLInputElement,
  options?: {
    permanent?: Array<string>;
  }
) => {
  if (!input.id) {
    throw "input id is required for validation";
  }

  if (!validationParams.validators) return;
  const items = [];

  for (const validator in validationParams.validators) {
    if (validator in messages) {
      const perm = options?.permanent?.includes(validator);
      const touched = validationParams.touched;

      if (!perm && !touched) continue;
      items.push(
        createElement(messages[validator], {
          permanent: perm,
          valid: validationParams.validators[validator],
        })
      );
    }
  }

  const id = `${input.id}_validator`;
  const rendered = document.getElementById(id);
  rendered && rendered.remove();
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "calc(var(--app-spacing) - 3px)";
  wrapper.id = id;
  items.forEach((item) => {
    wrapper.appendChild(item);
  });

  input.insertAdjacentElement("afterend", wrapper);
};
