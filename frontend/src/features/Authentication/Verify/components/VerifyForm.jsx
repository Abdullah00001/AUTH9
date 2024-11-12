import { useState } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import useVerifyOtpContext from '../../../../hooks/useVerifyOtpContext';
import resetState from '../helper/resetStates';
const VerifyForm = () => {
  const fieldNames = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  const { setErrorMessage, setSuccessMessage, verify, loading } =
    useVerifyOtpContext();
  const [emptyFields, setEmptyFields] = useState({});
  const handleVerify = e => {
    e.preventDefault();
    resetState({ setErrorMessage, setSuccessMessage });
    const email = localStorage.getItem('email');
    let isValid = true;
    const newEmptyFields = {};
    const requestedOtp = fieldNames
      .map(field => {
        const value = e.target[field].value;
        if (!value) {
          isValid = false;
          newEmptyFields[field] = true;
        }
        return value || '';
      })
      .join('');
    if (!isValid) {
      setErrorMessage('Please Fill All The Fields');
      setEmptyFields(newEmptyFields);
      return;
    }
    setEmptyFields({});
    const data = {
      email,
      requestedOtp,
    };
    console.log(data);
    verify(data);
  };
  return (
    <form onSubmit={handleVerify}>
      <div className='flex items-center gap-4'>
        {fieldNames.map((fieldName, index) => (
          <div key={index} className='w-[80px] h-[80px]'>
            <Input
              type={'text'}
              id={fieldName}
              name={fieldName}
              className={`w-full h-full text-center text-[35px] font-medium rounded-[16px] outline-none bg-transparent border-[1px] ${
                emptyFields[fieldName] ? `border-red-500` : `border-text`
              }`}
            />
          </div>
        ))}
      </div>
      <Button
        className={
          'font-bold text-[20px] bg-blue-500 px-[25px] py-[12px] rounded-[8px] mt-[32px]'
        }
      >
        Verify
      </Button>
    </form>
  );
};

export default VerifyForm;
