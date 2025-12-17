export const isEmpty = (value) => !value.trim()

export const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
export const isPhoneNumber=(phoneNumber)=> /^\+?\d{8}$/.test(phoneNumber)
