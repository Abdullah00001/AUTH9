import { useState } from 'react';
import RecoverAccountContext from '../contexts/recoverAccountContext';

const RecoverAccountProvider = ({ children }) => {
    const [loading,setLoading]=useState(null)
  const providerValue = {};
  return (
    <RecoverAccountContext.Provider value={providerValue}>
      {children}
    </RecoverAccountContext.Provider>
  );
};

export default RecoverAccountProvider;
