import RefreshUser from './components/auth/refreshUser';
import Login from './components/auth/login';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { isLoading, isLogin } = useAuth();
  return (
    <>
      <RefreshUser />
      {isLogin && !isLoading ? <p>Hi!</p> : <Login />}
    </>
  );
}
