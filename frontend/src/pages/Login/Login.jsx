import { Helmet } from 'react-helmet-async';
import LoginComponent from '../../features/Authentication/Login/components/LoginComponent';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { successMessage, setUser } = useAuthContext();
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      const delayNavigate = setTimeout(() => {
        setUser(true);
        navigate('/');
      }, 2500);
      return () => {
        clearTimeout(delayNavigate);
      };
    }
  }, [navigate, successMessage]);
  return (
    <>
      <Helmet>
        <title>Postbook | Login</title>
      </Helmet>
      <section>
        <Toaster position='top-center' reverseOrder={false} />
        <div className='flex justify-center items-center h-[80vh]'>
          <LoginComponent />
        </div>
      </section>
    </>
  );
};

export default Login;
