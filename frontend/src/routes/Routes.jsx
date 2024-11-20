import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import VerifyAccount from '../pages/Verify Account/VerifyAccount';
import ProtectedVerifyPage from '../components/Protected/ProtectedVerifyPage';
import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home/Home';
import ProtectedAuth from '../components/Protected/ProtectedAuth';
import ProtectedRoute from '../components/Protected/ProtectedRoute';
import ForgotPassword from '../pages/Forgot Password/ForgotPassword';
import UserFound from '../pages/Forgot Password/UserFound';
import ProtectedRecoverRoute from '../components/Protected/ProtectedRecoverRoute';
import VerifyCode from '../pages/Forgot Password/VerifyCode';
import NewPasword from '../pages/Forgot Password/NewPasword';
import RecoverSuccess from '../pages/Forgot Password/RecoverSuccess';
import Friends from '../pages/Friends/Friends';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';

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
    path: '/auth/forgot-password',
    element: (
      <ProtectedRoute>
        <ForgotPassword />
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth/recover/:useremail',
    element: (
      <ProtectedRecoverRoute>
        <UserFound />
      </ProtectedRecoverRoute>
    ),
  },
  {
    path: '/auth/recover/verify/:useremail',
    element: (
      <ProtectedRecoverRoute>
        <VerifyCode />
      </ProtectedRecoverRoute>
    ),
  },
  {
    path: '/auth/recover/password/:userEmail',
    element: (
      <ProtectedRecoverRoute>
        <NewPasword />
      </ProtectedRecoverRoute>
    ),
  },
  {
    path: '/auth/recover/password/successful',
    element: (
      <ProtectedRecoverRoute>
        <RecoverSuccess />
      </ProtectedRecoverRoute>
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
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/friends',
        element: <Friends />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

export default Routes;
