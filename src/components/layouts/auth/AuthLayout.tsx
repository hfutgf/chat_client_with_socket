import { authRoutes } from '@config/routes';
import { Route, Routes } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AuthLayout;
