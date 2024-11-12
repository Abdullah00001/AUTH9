import Input from '../../../../components/Input';
import useAuthContext from '../../../../hooks/useAuthContext';
const ConfirmPassword = () => {
  const { confirmPasswordFieldError } = useAuthContext();
  return (
    <div className='flex flex-col gap-4 w-full'>
      <label htmlFor='confirmPassword ' className='pl-2 text-xl'>
        Confirm Password
      </label>
      <Input
        type={'password'}
        id={'confirmPassword'}
        name={'confirmPassword'}
        placeholder={'Please Type Your Confirm Password'}
        className={
          'outline-none p-[15px] bg-accent placeholder-gray-100 border-none rounded-[16px]'
        }
      />
      {confirmPasswordFieldError && (
        <div className='text-red-500 text-sm  pl-2'>
          {confirmPasswordFieldError}
        </div>
      )}
    </div>
  );
};

export default ConfirmPassword;
