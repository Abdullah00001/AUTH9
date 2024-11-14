import { useContext } from 'react';
import RecoverAccountContext from '../contexts/recoverAccountContext';

const useRecoverAccountContext = () => {
  return useContext(RecoverAccountContext);
};

export default useRecoverAccountContext;
