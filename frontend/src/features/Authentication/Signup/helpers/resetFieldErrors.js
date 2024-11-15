const ResetFieldErrors = ({
  setFirstNameFieldError,
  setLastNameFieldError,
  setEmailFieldError,
  setPasswordFieldError,
  setConfirmPasswordFieldError,
  setIsFormValid,
  setErrorMessage
}) => {
  setFirstNameFieldError(null);
  setLastNameFieldError(null);
  setEmailFieldError(null);
  setPasswordFieldError(null);
  setConfirmPasswordFieldError(null);
  setFirstNameFieldError(null);
  setIsFormValid(null);
  setErrorMessage(null)
  return
};

export default ResetFieldErrors;
