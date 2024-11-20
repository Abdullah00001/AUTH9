import { useEffect, useState } from 'react';
import AuthContext from '../contexts/authContext';
import {
  checkAuth,
  loginUser,
  refreshTokens,
  signupUser,
  UserLogout,
} from '../apis/auth.apis';
import { ResetErrorMessage } from '../utils/authProvider.utils';

const AuthProvider = ({ children }) => {
  const [firstNameFieldError, setFirstNameFieldError] = useState(null);
  const [lastNameFieldError, setLastNameFieldError] = useState(null);
  const [emailFieldError, setEmailFieldError] = useState(null);
  const [passwordFieldError, setPasswordFieldError] = useState(null);
  const [confirmPasswordFieldError, setConfirmPasswordFieldError] =
    useState(null);
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isFormValid, setIsFormValid] = useState(null);
  const [isLogout, setIsLogout] = useState(null);

  const signup = async userData => {
    setLoading(true);
    ResetErrorMessage({ setErrorMessage, setSuccessMessage });
    try {
      const response = await signupUser(userData);
      const status = response.status;
      const message = response.data.message;
      if (status === 201) {
        localStorage.setItem('email', response.data.data.email);
        setSuccessMessage(message);
      }
    } catch (error) {
      const status = error.status;
      const message = error.response.data.message;
      switch (status) {
        case 400: {
          setErrorMessage(message);
          break;
        }
        case 409: {
          setErrorMessage(message);
          break;
        }
        case 500: {
          setErrorMessage(message);
          break;
        }
        default: {
          setErrorMessage('An unknown error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async userData => {
    ResetErrorMessage({ setErrorMessage, setSuccessMessage });
    setLoading(true);
    try {
      const response = await loginUser(userData);
      const status = response.status;
      const message = response.data.message;
      if (status === 200) {
        setSuccessMessage(message);
      }
    } catch (error) {
      const status = error.status;
      const message = error.response.data.message;
      switch (status) {
        case 400: {
          setErrorMessage(message);
          break;
        }
        case 401: {
          setErrorMessage(message);
          break;
        }
        case 403: {
          setErrorMessage(message);
          break;
        }
        case 500: {
          setErrorMessage(message);
          break;
        }
        default: {
          setErrorMessage('An unknown error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    ResetErrorMessage({ setErrorMessage, setSuccessMessage });
    setLoading(true);
    try {
      const response = await UserLogout();
      console.log(response);
      const message = response.data.message;
      console.log();
      if (response.status === 200) {
        console.log(message);
        setSuccessMessage(message);
        setIsLogout(true);
        setUser(null);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const auth = async () => {
      if (isLogout) return;
      setLoading(true);
      try {
        const response = await checkAuth();
        const status = response?.status;
        if (status === 200) {
          setUser(true);
        }
      } catch (error) {
        const status = error?.status;
        if (status === 401) {
          if (isLogout) return;
          if (user === null) return;
          try {
            const response = await refreshTokens();
            const status = response?.status;
            if (status === 200) {
              setUser(true);
            }
          } catch (error) {
            setUser(null);
          }
        }
        setUser(false);
      } finally {
        setLoading(false);
      }
    };
    auth();
  }, [user]);
  const providersValues = {
    firstNameFieldError,
    lastNameFieldError,
    emailFieldError,
    passwordFieldError,
    confirmPasswordFieldError,
    loading,
    user,
    successMessage,
    errorMessage,
    isFormValid,
    login,
    logout,
    setIsFormValid,
    signup,
    setErrorMessage,
    setSuccessMessage,
    setUser,
    setLoading,
    setConfirmPasswordFieldError,
    setPasswordFieldError,
    setEmailFieldError,
    setLastNameFieldError,
    setFirstNameFieldError,
  };
  return (
    <AuthContext.Provider value={providersValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
