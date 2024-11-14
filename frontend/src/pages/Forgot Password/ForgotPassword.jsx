import { Helmet } from 'react-helmet-async';
import ForgotPasswordComponent from '../../features/Authentication/Recover Account/components/ForgotPasswordComponent';

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <title>Postbook | Forgot Password</title>
      </Helmet>
      <section>
        <div className='flex h-[80vh] justify-center items-center'>
          <ForgotPasswordComponent />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
