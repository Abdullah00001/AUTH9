import { Navigate, useLocation } from 'react-router-dom';
import useRecoverAccountContext from '../../hooks/useRecoverAccountContext';

const ProtectedRecoverRoute = ({ children }) => {
  const { data } = useRecoverAccountContext();
  const location = useLocation();
  if (data) return children;
  return <Navigate state={location.pathname} to={'/auth/forgot-password'} />;
};

export default ProtectedRecoverRoute;
