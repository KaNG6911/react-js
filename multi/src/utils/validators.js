import { isEmpty } from "./validation";

export const validateStep = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Нэрээ оруулна уу";
  }
  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овгоо оруулна уу";
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = "И-мэйл хаягаа оруулна уу";
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Утасны дугаараа оруулна уу";
  }
  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үгээ оруулна уу";
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "Нууц үгээ давтана уу";
  }
  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};
export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.birthday)) {
    errors.birthday = "Төрсөн огноогоо оруулна уу";
  }
  if (isEmpty(formValues.profileImage)) {
    errors.profileImage = "Профайл зураг оруулна уу";
  }
  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};
