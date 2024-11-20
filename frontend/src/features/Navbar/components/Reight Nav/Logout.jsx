import React, { useEffect, useState } from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout, successMessage, setSuccessMessage, setErrorMessage } =
    useAuthContext();
  const [click, isClick] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    isClick(true);
  };
  useEffect(() => {
    if (click) {
      logout();
    }
  }, [click]);
  useEffect(() => {
    if (successMessage) {
      setErrorMessage(null);
      setSuccessMessage(null);
      navigate('/auth/login');
    }
  }, [successMessage]);
  return (
    <li onClick={handleLogout} className='font-medium cursor-pointer'>
      Logout
    </li>
  );
};

export default Logout;
