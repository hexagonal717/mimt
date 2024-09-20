import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const customerToken = useSelector(
    (state) => state.userAuthSlice.accessToken?.status,
  );

  return (customerToken) === 'success' ? (
    <Outlet />
  ) : (
    <Navigate to={'/'} />
  );
};

export default ProtectedRoutes;
