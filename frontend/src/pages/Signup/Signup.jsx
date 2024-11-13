import React, { useEffect } from 'react';
import SignupForm from '../../features/Authentication/Signup/components/SignupForm';
import useAuthContext from '../../hooks/useAuthContext';
import SetFieldError from '../../features/Authentication/Signup/helpers/SetFieldErrors';
import ResetFieldErrors from '../../features/Authentication/Signup/helpers/resetFieldErrors';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const {
    successMessage,
    errorMessage,
    signup,
    isFormValid,
    setFirstNameFieldError,
    setLastNameFieldError,
    setEmailFieldError,
    setPasswordFieldError,
    setConfirmPasswordFieldError,
    setIsFormValid,
    loading,
  } = useAuthContext();
  const handleSubmit = e => {
    e.preventDefault();
    ResetFieldErrors({
      setFirstNameFieldError,
      setLastNameFieldError,
      setEmailFieldError,
      setPasswordFieldError,
      setConfirmPasswordFieldError,
      setIsFormValid,
    });
    SetFieldError({
      e,
      setFirstNameFieldError,
      setLastNameFieldError,
      setEmailFieldError,
      setPasswordFieldError,
      setConfirmPasswordFieldError,
      setIsFormValid,
    });
    if (isFormValid && !loading) {
      const firstName = e.target.firstName.value.toLowerCase();
      const lastName = e.target.lastName.value.toLowerCase();
      const email = e.target.email.value.toLowerCase();
      const password = e.target.password.value.toLowerCase();
      signup({ firstName, lastName, email, password });
    }
    return;
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      const delayNavigate = setTimeout(() => {
        navigate('/auth/verify');
      }, 2500);
      return () => {
        clearTimeout(delayNavigate);
      };
    }
  }, [successMessage, navigate]);
  return (
    <>
      <Helmet>
        <title>Postbook | Signup</title>
      </Helmet>
      <section className='font-open_sans'>
        <Toaster position='top-center' reverseOrder={false} />
        <div className='flex flex-col h-[100vh] justify-center items-center'>
          <div className='w-[700px] rounded-[16px] border-t-[1px] rounded-r-none rounded-b-none  border-l-[1px] border-white p-[30px]'>
            <div>
              <h1 className='text-2xl font-bold mb-4'>
                Join the Postbook Community
              </h1>
              <p className='text-xl mb-6'>Connect, Share, and Grow with Us.</p>
            </div>
            {errorMessage && (
              <div
                className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-left'
                role='alert'
              >
                <ul className='list-disc pl-5'>
                  <li>
                    <span className='font-bold'>Error:</span> {errorMessage}
                  </li>
                </ul>
              </div>
            )}
            <div className='mt-8'>
              <SignupForm handleSubmit={handleSubmit}></SignupForm>
            </div>
            <p className='text-gray-200 font-normal text-[15px] mt-[14px] pl-[3px]'>
              Already Have An Account!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
