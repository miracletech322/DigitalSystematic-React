import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import HomePage from './pages/HomePage';

import SignIn from './pages/SignIn';
import Dashboard from './pages/AdminPage/Dashboard';
import DefaultLayout from './layout/DefaultLayout';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const isAuthenticated = (): boolean => {
    const authToken = localStorage.getItem("authToken");
    if (authToken == null || authToken == '')
      return false;
    return true;
  };

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/admin" replace />;
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />

      <Routes>

        <Route
          index
          element={
            <>
              <PageTitle title="Digital Systematic" />
              <HomePage />
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <>
              <PageTitle title="SignIn | Admin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Dashboard | Admin" />
                <DefaultLayout>
                  <Dashboard />
                </DefaultLayout>
              </>
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;
