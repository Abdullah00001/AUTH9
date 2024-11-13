const resetErrors = ({
  setEmailFieldError,
  setPasswordFieldError,
  setIsFormValid,
}) => {
  setEmailFieldError(null);
  setPasswordFieldError(null);
  setIsFormValid(null);
};

export default resetErrors;
