import Input from '../../../../components/Input';
import useAuthContext from '../../../../hooks/useAuthContext';

const LastName = () => {
  const {lastNameFieldError}=useAuthContext()
  return (
    <div className='flex flex-col gap-4 w-[50%]'>
      <label htmlFor='lastName ' className='pl-2 text-xl'>
        Last Name
      </label>
      <Input
        type={'text'}
        name={'lastName'}
        id={'lastName'}
        placeholder={'Please Type Your Last Name'}
        className={
          'outline-none p-[15px] placeholder-gray-100 bg-accent border-none rounded-[16px]'
        }
      />
      {lastNameFieldError && (
        <div className='text-red-500 text-sm  pl-2'>{lastNameFieldError}</div>
      )}
    </div>
  );
};

export default LastName;
