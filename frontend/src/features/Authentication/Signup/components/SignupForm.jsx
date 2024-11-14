import Email from '../../components/Email';
import Password from '../../components/Password';
import SubmitButton from '../../components/SubmitButton';
import ConfirmPassword from './ConfirmPassword';
import FirstName from './FirstName';
import LastName from './LastName';

const SignupForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-[10px]'>
        <div className='flex w-full gap-[8px]'>
          <FirstName />
          <LastName />
        </div>
        <div className='w-full'>
          <Email pl={'pl-2'} />
        </div>
        <div className='w-full'>
          <Password />
        </div>
        <div className='w-full'>
          <ConfirmPassword />
        </div>
      </div>
      <SubmitButton marginTop={'mt-[30px]'} name={'Signup'} />
    </form>
  );
};

export default SignupForm;
