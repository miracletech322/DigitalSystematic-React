import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import WelcomePage from './pages/WelcomePage';
import OnBoardingPage from './pages/OnBoardingPage';
import EmployeePage from './pages/EmployeePage';
import ManagerPage from './pages/ManagerPage';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        index
        element={
          <>
            <PageTitle title="Home | Digital Systematic" />
            <WelcomePage />
            <br />
            <OnBoardingPage />
            <br />
            <EmployeePage />
            <br />
            <ManagerPage />
            <br />
          </>
        }
      />
    </Routes>
  );
}

export default App;
