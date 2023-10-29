import { useSelector } from 'react-redux';
import { selectIsLoading, selectProducts } from '../redux/products/selectors';
import { selectError, selectResponse } from '../redux/products/selectors';

export const useProducts = () => {
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const response = useSelector(selectResponse);

  return {
    products,
    error,
    isLoading,
    response,
  };
};
