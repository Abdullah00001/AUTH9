import { Helmet } from 'react-helmet-async';
import SetPassword from '../../features/Authentication/Recover Account/components/SetPassword';

const NewPasword = () => {
  return (
    <>
      <Helmet>
        <title>Postbook | Forgot Password</title>
      </Helmet>
      <section>
        <div className='flex h-[80vh] justify-center items-center'>
          <SetPassword />
        </div>
      </section>
    </>
  );
};

export default NewPasword;
