import Button from '../../../components/Button';
import useAuthContext from '../../../hooks/useAuthContext';
const SubmitButton = ({ name, marginTop, type,handleClick }) => {
  const { loading } = useAuthContext();
  return (
    <Button
      type={type}
      onClick={handleClick}
      className={`font-bold text-md bg-secondary rounded-[15px] ${marginTop} px-[18px] py-[12px]`}
    >
      {loading ? <span>{name}...</span> : <span>{name}</span>}
    </Button>
  );
};

export default SubmitButton;
