import { useEffect, useState } from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import Email from '../../components/Email';
import Password from '../../components/Password';
import SubmitButton from '../../components/SubmitButton';
import resetErrors from '../helper/resetErrors';
import setErrors from '../helper/setErrors';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const handleNavigateForgotPassword = () => {
    navigate('/auth/forgot-password');
  };
  const [data, setData] = useState({});
  const {
    loading,
    login,
    isFormValid,
    setEmailFieldError,
    setPasswordFieldError,
    setIsFormValid,
    setErrorMessage,
  } = useAuthContext();
  const handleLogin = e => {
    e.preventDefault();
    resetErrors({
      setEmailFieldError,
      setPasswordFieldError,
      setIsFormValid,
      setErrorMessage,
    });
    setErrors({ e, setEmailFieldError, setPasswordFieldError, setIsFormValid });
    if (isFormValid && !loading) {
      const email = e.target.email.value.toLowerCase();
      const password = e.target.password.value.toLowerCase();
      setData({ email, password });
    }
  };
  useEffect(() => {
    if (data.email && data.password) {
      login(data);
    }
  }, [data]);
  return (
    <form onSubmit={handleLogin}>
      <div className='flex flex-col gap-4'>
        <div>
          <Email pl={'pl-2'} />
        </div>
        <div>
          <Password />
        </div>
      </div>
      <div className='mt-3 flex justify-end'>
        <span
          className='text-lg inline-block font-semibold text-blue-500 pr-3  cursor-pointer'
          onClick={handleNavigateForgotPassword}
        >
          Forgot Password!
        </span>
      </div>
      <SubmitButton marginTop={'mt-[10px]'} name={'Login'} />
    </form>
  );
};

export default LoginForm;
