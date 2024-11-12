import Input from '../../../components/Input';
import useAuthContext from '../../../hooks/useAuthContext';
const Password = () => {
  const { passwordFieldError } = useAuthContext();
  return (
    <div className='flex flex-col gap-4 w-full'>
      <label htmlFor='password ' className='pl-2 text-xl'>
        Password
      </label>
      <Input
        type={'password'}
        id={'password'}
        name={'password'}
        placeholder={'Please Type Your Password'}
        className={
          'outline-none p-[15px] bg-accent placeholder-gray-100 border-none rounded-[16px]'
        }
      />
      {passwordFieldError && (
        <div className='text-red-500 text-sm  pl-2'>{passwordFieldError}</div>
      )}
    </div>
  );
};

export default Password;
