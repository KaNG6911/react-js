export const saveFormValues = (formValues, step) => {
  const { profileImage, ...rest } = formValues;

  localStorage.setItem(
    "formValue",
    JSON.stringify({ ...rest, step: step + 1 }),
  );
};
export const retrieveFormValues = () => {
  const value = localStorage.getItem("formValue");
  return value ? JSON.parse(value) : null;
};
export const deleteFormValues = () => {
  localStorage.removeItem("formValue");
};
