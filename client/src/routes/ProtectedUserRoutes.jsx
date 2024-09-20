import { Route } from 'react-router-dom';
import UserLayout from '../components/layouts/UserLayout.jsx';
import HomePage from '../features/user/pages/HomePage.jsx';
const ProtectedUserRoutes = () => {
  return (
    <Route element={<UserLayout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  );
};

export default ProtectedUserRoutes;
