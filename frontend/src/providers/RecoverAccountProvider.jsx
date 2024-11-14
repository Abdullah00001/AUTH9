import { useState } from 'react';
import RecoverAccountContext from '../contexts/recoverAccountContext';
import { findUser } from '../apis/auth.apis';

const RecoverAccountProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
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
