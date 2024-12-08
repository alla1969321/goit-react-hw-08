import { useSelector } from 'react-redux';
import { authSelectors } from '../redux';

export const useAuth = () => {
  const user = useSelector(authSelectors.selectUser);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
