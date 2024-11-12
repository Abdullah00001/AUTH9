import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import VerifyAccount from '../pages/Verify Account/VerifyAccount';
import ProtectedVerifyPage from '../components/Protected/ProtectedVerifyPage';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home/Home';
import ProtectedAuth from '../components/Protected/ProtectedAuth';
import ProtectedRoute from '../components/Protected/ProtectedRoute';

const Routes = createBrowserRouter([
  {
    path: '/auth/login',
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth/signup',
    element: (
      <ProtectedRoute>
        <Signup />
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth/verify',
    element: (
      <ProtectedVerifyPage>
        <VerifyAccount />
      </ProtectedVerifyPage>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedAuth>
        <AppLayout />
      </ProtectedAuth>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
