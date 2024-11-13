import ErrorMessage from './ErrorMessage';
import LoginForm from './LoginForm';

const LoginComponent = () => {
  return (
    <div className='w-[700px] rounded-[16px] border-t-[1px] rounded-r-none rounded-b-none  border-l-[1px] border-white p-[30px]'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Welcome Back, Explorer!</h1>
        <p className='text-xl font-medium mb-6'>
          The world of PostBook is waiting for your next post.
        </p>
      </div>
      <ErrorMessage />
      <div className='mt-6'>
        <LoginForm />
      </div>
      <p className='text-gray-200 font-normal text-[15px] mt-[14px] pl-[3px]'>
        Not a member yet?
      </p>
    </div>
  );
};

export default LoginComponent;
