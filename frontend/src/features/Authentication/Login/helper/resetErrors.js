const resetErrors = ({
  setEmailFieldError,
  setPasswordFieldError,
  setIsFormValid,
  setErrorMessage,
}) => {
  setEmailFieldError(null);
  setPasswordFieldError(null);
  setIsFormValid(null);
  setErrorMessage(null)
};

export default resetErrors;
