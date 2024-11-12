import { useEffect } from 'react';
import useVerifyOtpContext from '../../../../hooks/useVerifyOtpContext';
import maskEmail from '../../../../utils/maskEmail';
import VerifyForm from './VerifyForm';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useAuthContext from '../../../../hooks/useAuthContext';

const Verify = () => {
  const email = localStorage.getItem('email');
  const navigate = useNavigate();
  const { errorMessage, successMessage } = useVerifyOtpContext();
  const { setUser } = useAuthContext();
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      setUser(true);
      const delayNavigate = setTimeout(() => {
        localStorage.clear('email');
        navigate('/');
      }, 2500);
      return () => {
        clearTimeout(delayNavigate);
      };
    }
  }, [navigate, successMessage]);
  return (
    <div className='w-[600px] p-[30px] border-[1px] border-text rounded-[16px]'>
      <Toaster position='top-center' reverseOrder={false} />
      <h1 className=' text-3xl font-bold'>Verify Your Account</h1>
      <hr className='mt-3' />
      <h3 className='font-medium text-xl mt-4'>
        We sent your code to : {maskEmail(email)}
      </h3>
      <h5 className='text-lg mt-2'>
        Please enter the 6-digit code below to complete verification.
      </h5>

      <div className='mt-[35px]'>
        {errorMessage && (
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-left'
            role='alert'
          >
            <ul className='list-disc pl-5'>
              <li>
                <span className='font-bold'>Error:</span> {errorMessage}
              </li>
            </ul>
          </div>
        )}
        <VerifyForm />
      </div>
    </div>
  );
};

export default Verify;
