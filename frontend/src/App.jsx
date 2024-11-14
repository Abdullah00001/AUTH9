import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthProvider from './providers/AuthProvider';
import VerifyOtpProvider from './providers/VerifyOtpProvider';
import RecoverAccountProvider from './providers/RecoverAccountProvider';

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <VerifyOtpProvider>
            <RecoverAccountProvider>
              <RouterProvider router={Routes}></RouterProvider>
            </RecoverAccountProvider>
          </VerifyOtpProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
