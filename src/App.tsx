import AuthLayout from '@components/layouts/auth/AuthLayout';
import MainLayout from '@components/layouts/main/MainLayout';

function App() {
  const user = false;

  return <>{user ? <MainLayout /> : <AuthLayout />}</>;
}

export default App;
