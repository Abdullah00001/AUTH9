import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  /* if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <RotatingLines
          visible={true}
          height='96'
          width='96'
          color='grey'
          strokeWidth='5'
          animationDuration='0.75'
          ariaLabel='rotating-lines-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      </div>
    );
  } */
  /* if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl'>Loading...</h1>
      </div>
    );
  } */
  if (!user) return children;
  return <Navigate state={location.pathname} to={'/'} />;
};

export default ProtectedRoute;
