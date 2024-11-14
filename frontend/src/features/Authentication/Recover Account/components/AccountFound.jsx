import { useNavigate } from 'react-router-dom';
import useRecoverAccountContext from '../../../../hooks/useRecoverAccountContext';
import SubmitButton from '../../components/SubmitButton';
import { useEffect } from 'react';

const AccountFound = () => {
  const { data, setData, sentEmail, success } = useRecoverAccountContext();
  const navigate = useNavigate();
  const handleNotYou = () => {
    setData(null);
    navigate('/auth/forgot-password');
  };
  const handleContinue = async () => {
    try {
      await sentEmail({ email: data.email });
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (data && success) navigate(`/auth/recover/verify/:${data.email}`);
  }, [success, data]);
  return (
    <div className='border-[1px] border-text rounded-[16px] p-[25px] w-[600px]'>
      <h1 className='text-2xl font-extrabold'>Reset Your Password</h1>
      <hr className='mt-3' />
      <p className=' mt-2'>
        We’re here to help you securely recover your account. A unique
        verification code has been sent to your email. Please check your inbox,
        enter the code, and regain access with confidence. Your account security
        matters to us!
      </p>
      <div className='mt-3'>
        <h1 className='text-lg font-bold'>
          {data.firstName} {data.lastName}
        </h1>
        <h4 className='text-sm mt-1'>{data.email}</h4>
      </div>
      <div className='flex items-center justify-start mt-6 gap-3'>
        <SubmitButton
          handleClick={handleNotYou}
          type={'button'}
          name={'Not You?'}
        />
        <SubmitButton
          handleClick={handleContinue}
          type={'button'}
          name={'Continue'}
        />
      </div>
    </div>
  );
};

export default AccountFound;
