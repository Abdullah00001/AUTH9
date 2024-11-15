import { useEffect, useState } from 'react';
import Input from '../../../../components/Input';
import useRecoverAccountContext from '../../../../hooks/useRecoverAccountContext';
import SubmitButton from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';

const SetPasswordForm = () => {
  const { data, recoverSuccess, setRecoverSuccess, recover, setError } =
    useRecoverAccountContext();
  const [password, setPassword] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    setError(null);
    setFieldError(null);
    setPassword(null);
    setRecoverSuccess(null);
    const userPassword = e.target.password.value;
    if (userPassword === '') {
      setFieldError('Please Provide Password');
      return;
    }
    setPassword(userPassword);
  };
  useEffect(() => {
    if (password && data) {
      console.log('hello');
      recover({ email: data.email, password });
    }
  }, [password, data]);
  useEffect(() => {
    if (recoverSuccess && data) {
      console.log('hello');
      navigate('/auth/recover/password/successful');
    }
  }, [recoverSuccess, data, navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name={'password'}
        id={'password'}
        type={'password'}
        className={
          'w-full p-[15px] rounded-[14px] bg-accent placeholder-gray-100 border-none outline-none'
        }
        placeholder={'New Password'}
      />
      {fieldError && (
        <div className='text-red-500 text-sm mt-3  pl-2'>{fieldError}</div>
      )}
      <hr className='mt-5' />
      <div className='flex justify-end mt-[25px]'>
        <div>
          <SubmitButton name={'Continue'} />
        </div>
      </div>
    </form>
  );
};

export default SetPasswordForm;
