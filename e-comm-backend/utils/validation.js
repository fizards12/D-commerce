const validateForm = (formData) => {
  const { name, description, price, category } = formData;
  if (
    validateText(name) &&
    validateText(description) &&
    validateText(price) &&
    validateNumber(price) &&
    validateText(category)
  ) {
    return true;
  }
  return false;
};
const validateText = (text) => text.trim() !== "";

const validateNumber = (number) => !isNaN(+number);

module.exports = { validateForm, validateNumber, validateText };
