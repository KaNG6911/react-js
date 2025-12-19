export const saveFormValues = (formValues, step) => {
  localStorage.setItem(
    "formValue",
    JSON.stringify({ ...formValues, step: step + 1 })
  );
};
export const retrieveFormValues = () => {
  const value = localStorage.getItem("formValue");
  return value ? JSON.parse(value) : null;
};
export const deleteFormValues = () => {
  localStorage.removeItem("formValue");
};
