import { isEmpty } from './validation'
import { isEmail } from './validation'
import { isPhoneNumber } from './validation'

// PAGE NUMBER 1

export const validateStep = (formValues) => {
  const errors = {}

  if (isEmpty(formValues.firstName)) {
    errors.firstName = 'Нэрээ оруулна уу'
  }
  if (isEmpty(formValues.lastName)) {
    errors.lastName = 'Овгоо оруулна уу'
  }
  if (isEmpty(formValues.userName)) {
    errors.userName = 'Хэрэглэгчийн нэрээ оруулна уу'
  }

  const isValid = Object.keys(errors).length === 0

  return { errors, isValid }
}

// PAGE NUMBER 2

export const validateStepTwo = (formValues) => {
  const errors = {}

  if (isEmpty(formValues.email)) {
    errors.email = 'И-мэйл хаягаа оруулна уу'
  } else if (!isEmail(formValues.email)) {
    errors.email = 'И-мэйл хаяг буруу байна'
  }

  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = 'Утасны дугаараа оруулна уу'
  } else if (!isPhoneNumber(formValues.phoneNumber)) {
    errors.phoneNumber = 'Утасны дугаар буруу байна'
  }

  if (isEmpty(formValues.password)) {
    errors.password = 'Нууц үгээ оруулна уу'
  } else if (formValues.password.length < 6) {
    errors.password = 'Нууц үг дор хаяж 6 тэмдэгттэй байх ёстой'
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = 'Нууц үгээ давтана уу'
  }
  if (
    !isEmpty(formValues.password) &&
    !isEmpty(formValues.confirmPassword) &&
    formValues.password !== formValues.confirmPassword
  ) {
    errors.confirmPassword = 'Нууц үг таарахгүй байна'
  }
  const isValid = Object.keys(errors).length === 0

  return { errors, isValid }
}

// PAGE NUMBER 3

export const validateStepThree = (formValues) => {
  const errors = {}

  if (isEmpty(formValues.birthday)) {
    errors.birthday = 'Төрсөн огноогоо оруулна уу'
  } else if (new Date(formValues.birthday) > new Date()) {
    errors.birthday = 'Төрсөн огноо ирээдүйн огноо байж болохгүй'
  } else if (
    new Date().getFullYear() - new Date(formValues.birthday).getFullYear() <
    18
  ) {
    errors.birthday = 'Та 18-аас дээш насны байх ёстой'
  }
  if (isEmpty(formValues.profileImage)) {
    errors.profileImage = 'Профайл зураг оруулна уу'
  }
  const isValid = Object.keys(errors).length === 0

  return { errors, isValid }
}
