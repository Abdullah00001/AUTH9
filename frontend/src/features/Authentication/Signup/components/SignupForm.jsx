import Button from '../../../../components/Button';
import useAuthContext from '../../../../hooks/useAuthContext';
import Email from '../../components/Email';
import Password from '../../components/Password';
import ConfirmPassword from './ConfirmPassword';
import FirstName from './FirstName';
import LastName from './LastName';

const SignupForm = ({ handleSubmit }) => {
  const { loading } = useAuthContext();
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-[10px]'>
        <div className='flex w-full gap-[8px]'>
          <FirstName />
          <LastName />
        </div>
        <div className='w-full'>
          <Email />
        </div>
        <div className='w-full'>
          <Password />
        </div>
        <div className='w-full'>
          <ConfirmPassword />
        </div>
      </div>
      <Button
        className={
          'font-bold text-md bg-secondary rounded-[15px] mt-[30px] px-[18px] py-[12px]'
        }
      >
        {loading ? <span>Signup...</span> : <span>Signup</span>}
      </Button>
    </form>
  );
};

export default SignupForm;
