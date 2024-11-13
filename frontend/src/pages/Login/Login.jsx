import { Helmet } from 'react-helmet-async';
import LoginComponent from '../../features/Authentication/Login/components/LoginComponent';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { successMessage } = useAuthContext();
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      const delayNavigate = setTimeout(() => {
        navigate('/');
      }, 2500);
      return () => {
        clearTimeout(delayNavigate);
      };
    }
  }, [successMessage, navigate]);
  return (
    <>
      <Helmet>
        <title>Postbook | Login</title>
      </Helmet>
      <section>
        <div className='flex justify-center items-center h-[80vh]'>
          <Toaster position='top-center' reverseOrder={false} />
          <LoginComponent />
        </div>
      </section>
    </>
  );
};

export default Login;
