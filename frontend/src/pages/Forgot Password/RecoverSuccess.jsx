import { Helmet } from 'react-helmet-async';
import SubmitButton from '../../features/Authentication/components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import useRecoverAccountContext from '../../hooks/useRecoverAccountContext';

const RecoverSuccess = () => {
  const { setData } = useRecoverAccountContext();
  const navigate = useNavigate();
  const navigateLogin = () => {
    setData(null);
    navigate('/auth/login');
  };
  return (
    <>
      <Helmet>
        <title>Postbook | Password Reset Successful</title>
      </Helmet>
      <section>
        <div className='flex items-center flex-col justify-center h-[80vh]'>
          <div className='w-[800px] p-[20px] border-[1px] rounded-[14px]'>
            <h1 className='text-3xl font-extrabold'>
              🎉 Success! Your Password Has Been Updated
            </h1>
            <h3 className='font-semibold text-lg mt-4'>
              Your password reset was successful, and your account is now fully
              secure. <br /> We’re excited to help you get back to what matters!
            </h3>
            <h2 className='text-xl font-bold mt-5'>Next Step: 🤔</h2>

            <h5 className='text-xl mt-2'>
              You can log in securely with your new password.
            </h5>
            <SubmitButton
              marginTop={'mt-[26px]'}
              handleClick={navigateLogin}
              type={'button'}
              name={'Login'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecoverSuccess;
