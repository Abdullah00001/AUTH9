import RecoverErrorMessage from './RecoverErrorMessage';
import SecurityCodeForm from './SecurityCodeForm';

const VerifyUserAccount = () => {
  return (
    <div className='border-[1px] border-text rounded-[16px] p-[25px] w-[600px]'>
      <h1 className='text-2xl font-extrabold'>Enter security code</h1>
      <hr className='mt-3' />
      <p className=' mt-2'>
        Check your email for a 6-digit verification code to proceed with your
        account recovery.
      </p>
      <RecoverErrorMessage />
      <div className='mt-6'>
        <SecurityCodeForm />
      </div>
    </div>
  );
};

export default VerifyUserAccount;
