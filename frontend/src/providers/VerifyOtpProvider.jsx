import React, { useState } from 'react';
import VerifyOtpContext from '../contexts/verifyOTPContext';
import { verifyEmail } from '../apis/auth.apis';

const VerifyOtpProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const verify = async data => {
    setLoading(true);
    try {
      const response = await verifyEmail(data);
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
  const value = {
    errorMessage,
    loading,
    successMessage,
    setSuccessMessage,
    verify,
    setLoading,
    setErrorMessage,
  };
  return (
    <VerifyOtpContext.Provider value={value}>
      {children}
    </VerifyOtpContext.Provider>
  );
};

export default VerifyOtpProvider;
