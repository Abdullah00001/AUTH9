import Input from '../../../../components/Input';
import useAuthContext from '../../../../hooks/useAuthContext';

const FirstName = () => {
  const { firstNameFieldError } = useAuthContext();
  return (
    <div className='flex flex-col gap-4 w-[50%]'>
      <label htmlFor='firstName ' className='pl-2 text-xl'>
        First Name
      </label>
      <Input
        type={'text'}
        id={'firstName'}
        name={'firstName'}
        placeholder={'Please Type Your First Name'}
        className={
          'outline-none p-[15px] bg-accent placeholder-gray-100 border-none rounded-[16px]'
        }
      />
      {firstNameFieldError && (
        <div className='text-red-500 text-sm  pl-2'>{firstNameFieldError}</div>
      )}
    </div>
  );
};

export default FirstName;
