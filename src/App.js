import RefreshUser from './components/auth/refreshUser';
import Login from './components/auth/login';
import Main from './components/main/main';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user, isLoading, isLogin } = useAuth();
  return (
    <>
      <RefreshUser />
      {isLogin && !isLoading ? <Main user={user} /> : <Login />}
    </>
  );
}
