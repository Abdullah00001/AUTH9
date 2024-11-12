import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthProvider from './providers/AuthProvider';
import VerifyOtpProvider from './providers/VerifyOtpProvider';

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <VerifyOtpProvider>
            <RouterProvider router={Routes}></RouterProvider>
          </VerifyOtpProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
