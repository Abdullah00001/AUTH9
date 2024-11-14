import { useState } from 'react';
import RecoverAccountContext from '../contexts/recoverAccountContext';
import {
  findUser,
  recoverPassword,
  sentOtp,
  verifyOtp,
} from '../apis/auth.apis';

const RecoverAccountProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isOTPValid, setIsOTPValid] = useState(null);
  const [isAccountFound, setIsAccountFound] = useState(null);
  const [recoverSuccess, setRecoverSuccess] = useState(null);
  const find = async userData => {
    setLoading(true);
    try {
      const response = await findUser(userData);
      console.log(response);
      const status = response.status;
      const responseData = response.data.data;
      console.log(responseData);
      if (status === 200) {
        setData(responseData);
      }
    } catch (error) {
      console.log(error);
      const status = error.status;
      const errorMessage = error.response.data.message;
      switch (status) {
        case 401: {
          setError(errorMessage);
          break;
        }
        case 403: {
          setError(errorMessage);
          break;
        }
        case 500: {
          setError(errorMessage);
          break;
        }
        default: {
          setError('An unknown error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(null);
    }
  };
  const sentEmail = async userData => {
    setLoading(true);
    try {
      const response = await sentOtp(userData);
      const status = response.status;
      if (status === 200) {
        setIsAccountFound(true);
      }
    } catch (error) {
      const status = error.status;
      const errorMessage = error.response.data.message;
      switch (status) {
        case 401: {
          setError(errorMessage);
          break;
        }
        case 403: {
          setError(errorMessage);
          break;
        }
        case 500: {
          setError(errorMessage);
          break;
        }
        default: {
          setError('An unknown error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const verify = async userData => {
    setLoading(true);
    try {
      const response = await verifyOtp(userData);
      const status = response.status;
      if (status === 200) {
        setIsOTPValid(true);
      }
    } catch (error) {
      console.log(error);
      const status = error.status;
      const errorMessage = error.response.data.message;
      switch (status) {
        case 400: {
          setError(errorMessage);
          break;
        }
        case 401: {
          setError(errorMessage);
          break;
        }
        case 403: {
          setError(errorMessage);
          break;
        }
        case 500: {
          setError(errorMessage);
          break;
        }
        default: {
          setError('An unknown error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(null);
    }
  };
  const recover = async userData => {
    setLoading(true);
    try {
      const response = await recoverPassword(userData);
      if (response.status === 200) setRecoverSuccess(true);
    } catch (error) {
      const status = error.status;
      const errorMessage = error.response.data.message;
      switch (status) {
        case 401: {
          setError(errorMessage);
          break;
        }
        case 403: {
          setError(errorMessage);
          break;
        }
        case 500: {
          setError(errorMessage);
          break;
        }
        default: {
          setError('An unknown error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(null);
    }
  };
  const providerValue = {
    loading,
    data,
    error,
    isAccountFound,
    isOTPValid,
    recoverSuccess,
    setRecoverSuccess,
    recover,
    setIsOTPValid,
    setIsAccountFound,
    verify,
    sentEmail,
    setLoading,
    setError,
    setData,
    find,
  };
  return (
    <RecoverAccountContext.Provider value={providerValue}>
      {children}
    </RecoverAccountContext.Provider>
  );
};

export default RecoverAccountProvider;
