import { useSelector } from 'react-redux';
import {
  selectIsLogin,
  selectUser,
  selectError,
  selectIsLoading,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    isLogin,
    user,
    isLoading,
    error,
  };
};
