import { useContext } from 'react';
import VerifyOtpContext from '../contexts/verifyOTPContext';

const useVerifyOtpContext = () => {
  return useContext(VerifyOtpContext);
};

export default useVerifyOtpContext;
