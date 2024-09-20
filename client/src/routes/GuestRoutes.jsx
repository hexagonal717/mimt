import { Route } from 'react-router-dom';
import HomePage from '../features/user/pages/HomePage.jsx';
import LogInPage from '../features/user/pages/LogInPage.jsx';
import SignUpPage from '../features/user/pages/SignUpPage.jsx';
import GuestLayout from '../components/layouts/GuestLayout.jsx';

const GuestRoutes = () => {
  return (
    <>
      <Route element={<GuestLayout />}>
        {/*<Route path="/" element={<HomePage />} />*/}
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </>
  );
};

export default GuestRoutes;
