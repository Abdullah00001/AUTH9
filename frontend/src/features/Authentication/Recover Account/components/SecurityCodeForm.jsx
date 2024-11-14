import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import useRecoverAccountContext from '../../../../hooks/useRecoverAccountContext';
import SubmitButton from '../../components/SubmitButton';
import { useEffect, useState } from 'react';

const SecurityCodeForm = () => {
  const { data, setData, verify, isOTPValid } =
    useRecoverAccountContext();
  const [userData, setUserData] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const otp = e.target.otp.value;
    if (otp === '') {
      setFieldError('Please Provide The OTP');
      return;
    }
    setUserData({ email: data.email, otp });
  };
  useEffect(() => {
    if (userData) verify(userData);
  }, [userData]);
  useEffect(() => {
    if (isOTPValid && data) navigate(`/auth/recover/password/:${data.email}`);
  }, [isOTPValid, navigate,data]);
  const handleCancel = () => {
    setData(null);
    navigate('/auth/login');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center'>
        <div className='flex-1'>
          <Input
            type={'text'}
            name={'otp'}
            id={'otp'}
            className={
              'border-none rounded-[14px] w-[95%] placeholder-gray-100 outline-none bg-accent p-[16px]'
            }
            placeholder={'Enter Your Code'}
          />
        </div>
        <div className='flex-1'>
          <h1 className='text-lg font-medium'>
            We’ve sent your code to: <br />{' '}
            <span className='text-[16px] font-normal'>{data.email}</span>
          </h1>
        </div>
      </div>
      {fieldError && (
        <div className='text-red-500 text-sm mt-3  pl-2'>{fieldError}</div>
      )}
      <hr className='mt-5' />
      <div className='flex items-center justify-center gap-4 mt-[14px]'>
        <div className='flex-1'>
          <h1>Didn't Get Code!</h1>
        </div>
        <div className='flex items-center justify-end gap-3 flex-1'>
          <SubmitButton
            handleClick={handleCancel}
            type={'button'}
            name={'Cancel'}
          />
          <SubmitButton type={'submit'} name={'Continue'} />
        </div>
      </div>
    </form>
  );
};

export default SecurityCodeForm;
