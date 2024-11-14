import FindAccountForm from './FindAccountForm';
import RecoverErrorMessage from './RecoverErrorMessage';

const ForgotPasswordComponent = () => {
  return (
    <div className='border-[1px] border-text rounded-[16px] p-[25px] w-[600px]'>
      <h1 className='text-2xl font-extrabold'>Find Your Account</h1>
      <hr className='mt-3' />
      <h4 className='font-medium text-[16px] mt-4'>
        Enter the email address associated with your account to begin the
        search.
      </h4>
      <RecoverErrorMessage/>
      <div className='mt-4'>
        <FindAccountForm />
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
