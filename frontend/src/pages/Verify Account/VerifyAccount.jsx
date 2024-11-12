import Verify from '../../features/Authentication/Verify/components/Verify';
import { Helmet } from 'react-helmet-async';

const VerifyAccount = () => {
  return (
    <>
      <Helmet>
        <title>Verify Your Account</title>
      </Helmet>
      <section>
        <div className='flex items-center justify-center h-[80vh]'>
          <Verify />
        </div>
      </section>
    </>
  );
};

export default VerifyAccount;
