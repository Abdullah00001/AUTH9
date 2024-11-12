import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

const ProtectedAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuthContext();
  if (user) return children;
  return <Navigate state={location.pathname} to={'/auth/login'} />;
};

export default ProtectedAuth;
