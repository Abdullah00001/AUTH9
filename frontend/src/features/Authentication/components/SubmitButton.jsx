import Button from '../../../components/Button';
import useAuthContext from '../../../hooks/useAuthContext';
const SubmitButton = ({ name }) => {
  const { loading } = useAuthContext();
  return (
    <Button
      className={
        'font-bold text-md bg-secondary rounded-[15px] mt-[30px] px-[18px] py-[12px]'
      }
    >
      {loading ? <span>{name}...</span> : <span>{name}</span>}
    </Button>
  );
};

export default SubmitButton;
