import Input from '../../../components/Input';
import useAuthContext from '../../../hooks/useAuthContext';
const Email = () => {
  const { emailFieldError } = useAuthContext();
  return (
    <div className='flex flex-col gap-4 w-full'>
      <label htmlFor='email ' className='pl-2 text-xl'>
        Email
      </label>
      <Input
        type={'email'}
        id={'email'}
        name={'email'}
        placeholder={'Please Type Your Email'}
        className={
          'outline-none p-[15px] bg-accent placeholder-gray-100 border-none rounded-[16px]'
        }
      />
      {emailFieldError && (
        <div className='text-red-500 text-sm  pl-2'>{emailFieldError}</div>
      )}
    </div>
  );
};

export default Email;
