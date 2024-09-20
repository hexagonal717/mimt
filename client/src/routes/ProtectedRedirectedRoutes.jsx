import { Navigate, Route } from 'react-router-dom';

const ProtectedRedirectedRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Navigate to={'/'} />} />
      <Route path="/signup" element={<Navigate to={'/'} />} />
    </>
  );
};

export default ProtectedRedirectedRoutes;
