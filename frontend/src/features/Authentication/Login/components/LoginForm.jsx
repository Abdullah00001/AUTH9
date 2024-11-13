import { useEffect, useState } from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import Email from '../../components/Email';
import Password from '../../components/Password';
import SubmitButton from '../../components/SubmitButton';
import resetErrors from '../helper/resetErrors';
import setErrors from '../helper/setErrors';

const LoginForm = () => {
  const [data, setData] = useState({});
  const {
    loading,
    login,
    isFormValid,
    setEmailFieldError,
    setPasswordFieldError,
    setIsFormValid,
  } = useAuthContext();
  const handleLogin = e => {
    e.preventDefault();
    resetErrors({ setEmailFieldError, setPasswordFieldError, setIsFormValid });
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
          <Email />
        </div>
        <div>
          <Password />
        </div>
      </div>
      <SubmitButton name={'Login'} />
    </form>
  );
};

export default LoginForm;
