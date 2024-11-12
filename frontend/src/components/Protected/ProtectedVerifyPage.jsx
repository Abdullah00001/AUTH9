import { Navigate, useLocation } from 'react-router-dom';

const ProtectedVerifyPage = ({ children }) => {
  const location = useLocation();
  const email = localStorage.getItem('email');
  if (email) return children;
  return <Navigate state={location.pathname} to={'/'} />;
};

export default ProtectedVerifyPage;
