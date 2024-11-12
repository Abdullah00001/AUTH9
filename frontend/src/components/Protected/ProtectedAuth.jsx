import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import { RotatingLines } from 'react-loader-spinner';

const ProtectedAuth = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  if (loading) {
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
  }
  if (user) return children;
  return <Navigate state={location.pathname} to={'/auth/login'} />;
};

export default ProtectedAuth;
