import { renderValidators } from "./render.js";
import Validation, {
  email,
  required,
  minLength,
  hasUpperCase,
  hasLowerCase,
  hasNumber,
  hasSpecialChar,
} from "./validation.js";

const registerForm = document.querySelector("#register_form") as HTMLFormElement;
const emailInput = document.querySelector("#register_email") as HTMLInputElement;
const passwordInput = document.querySelector("#register_password") as HTMLInputElement;

const formValidation = {
  email: null,
  password: null,
};

const makeEmailDirty = Validation(
  emailInput,
  {
    email,
    required,
  },
  (validationParams) => {
    formValidation.email = validationParams;
    renderValidators(validationParams, emailInput);
  }
);

const makePasswordDirty = Validation(
  passwordInput,
  {
    required,
    minLength: minLength(8),
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
    hasLowerCase,
  },
  (validationParams) => {
    formValidation.password = validationParams;
    renderValidators(validationParams, passwordInput, {
      permanent: ["minLength", "hasLowerCase", "hasUpperCase", "hasNumber", "hasSpecialChar"],
    });
  }
);

const onSubmit = (e: Event) => {
  e.preventDefault();
  if (!formValidation.email.valid || !formValidation.password.valid) {
    makeEmailDirty();
    makePasswordDirty();
    alert("invalid inputs!");
    return;
  }

  alert(
    `success: email: ${formValidation.email.value} | password: ${formValidation.password.value}`
  );
};

registerForm.addEventListener("submit", onSubmit);
