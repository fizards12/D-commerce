const {
  validateText,
  validateEmailSyntax,
  validateUsernameSyntax,
  validatePasswordSyntax,
} = require("./validation");

function validateRegisterForm(formData) {
  const { name, username, email, password } = formData;
  if (
    !(
      validateText(name) &&
      validateText(username) &&
      validateText(email) &&
      validateText(password)
    )
  ) {
    return {
      error: "Enter Valid Information!",
    };
  }
  const isValidUsername = validateUsernameSyntax(username);
  if (isValidUsername.error) {
    return {
      error: isValidUsername.error.message,
    };
  }

  const isValidPassword = validatePasswordSyntax(password);
  if (isValidPassword.error) {
    return {
      error: isValidPassword.error.message,
    };
  }

  const isValidEmail = validateEmailSyntax(email);
  if (!isValidEmail) {
    return {
      error: "Enter Valid Email.",
    };
  }
  return {
    valid: true
  }
}

module.exports = {
  validateRegisterForm,
};
