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
const validateText = (text) => text && text.trim() !== "";

const validateNumber = (number) => !isNaN(+number);

const validateEmailSyntax = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validateUsernameSyntax = (username = "") => {
  if (username.length < 6 || username.length > 20) {
    return {
      error: {
        message: "Enter valid username in range [6-20] characters",
      },
    };
  }
  if (!isNaN(+username[0])) {
    return {
      error: {
        message: "First character must be letter.",
      },
    };
  }
  return {
    success: true,
  };
};

const validatePasswordSyntax = (password = "") => {
  if (password.length < 8) {
    return {
      error: {
        message: "Too short password, must be in range [8-20]",
      },
    };
  } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
    return {
      error: {
        message: "Enter at least one capital character.",
      },
    };
  } else if (!/^(?=.*[a-z]).+$/.test(password)) {
    return {
      error: {
        message: "Enter at least one small character.",
      },
    };
  } else if (!/^(?=.*[#@%]).+$/.test(password)) {
    return {
      error: {
        message: `Enter at least one of those symbols: @ / # / %`,
      },
    };
  } else if (password.length > 20) {
    return {
      error: {
        message: "Enter Valid Password with in range 8 - 30 characters.",
      },
    };
  }
  return {
    success: true,
  };
};

module.exports = {
  validateForm,
  validateNumber,
  validateText,
  validateEmailSyntax,
  validatePasswordSyntax,
  validateUsernameSyntax,
};
