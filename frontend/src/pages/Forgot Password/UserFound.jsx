import { Helmet } from 'react-helmet-async';
import AccountFound from '../../features/Authentication/Recover Account/components/AccountFound';

const UserFound = () => {
  return (
    <>
      <Helmet>
        <title>Postbook | Forgot Password</title>
      </Helmet>
      <section>
        <div className='flex h-[80vh] justify-center items-center'>
          <AccountFound />
        </div>
      </section>
    </>
  );
};

export default UserFound;
