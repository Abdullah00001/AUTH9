const SetFieldError = ({
  e,
  setFirstNameFieldError,
  setLastNameFieldError,
  setEmailFieldError,
  setPasswordFieldError,
  setConfirmPasswordFieldError,
  setIsFormValid,
}) => {
  let valid = true;
  const { firstName, lastName, email, password, confirmPassword } = e.target;
  if (firstName.value.toLowerCase() === '') {
    valid = false;
    setFirstNameFieldError('Please Provide First Name');
  }
  if (lastName.value.toLowerCase() === '') {
    valid = false;
    setLastNameFieldError('Please Provide last Name');
  }
  if (email.value.toLowerCase() === '') {
    valid = false;
    setEmailFieldError('Please Provide Email');
  }
  if (password.value.toLowerCase() === '') {
    valid = false;
    setPasswordFieldError('Please Provide Password');
  }
  if (confirmPassword.value.toLowerCase() === '') {
    valid = false;
    setConfirmPasswordFieldError('Please Provide Confirm Password');
  }
  if (password.value.toLowerCase() !== confirmPassword.value.toLowerCase()) {
    valid = false;
    setConfirmPasswordFieldError('Password And Confirm Password Didnt Match');
  }
  setIsFormValid(valid);
  return;
};

export default SetFieldError;
