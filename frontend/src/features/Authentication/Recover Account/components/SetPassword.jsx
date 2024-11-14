import RecoverErrorMessage from './RecoverErrorMessage';
import SetPasswordForm from './SetPasswordForm';

const SetPassword = () => {
  return (
    <div className='border-[1px] border-text rounded-[16px] p-[25px] w-[600px]'>
      <h1 className='text-2xl font-extrabold'>
        Secure Your Account with a New Password
      </h1>
      <hr className='mt-3' />
      <p className=' mt-2'>
        Choose a password with a minimum of 6 characters. For a strong password,
        consider mixing letters, numbers, and special characters—your security
        matters to us!
      </p>
      <RecoverErrorMessage />
      <div className='mt-6'>
        <SetPasswordForm />
      </div>
    </div>
  );
};

export default SetPassword;
