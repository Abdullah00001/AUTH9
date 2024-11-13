const setErrors = ({
  e,
  setEmailFieldError,
  setPasswordFieldError,
  setIsFormValid,
}) => {
  let valid = true;
  const { email, password } = e.target;
  if (email.value.toLowerCase() === '') {
    valid = false;
    setEmailFieldError('Please Provide Email');
  }
  if (password.value.toLowerCase() === '') {
    valid = false;
    setPasswordFieldError('Please Provide Password');
  }
  setIsFormValid(valid);
  return;
};

export default setErrors;
