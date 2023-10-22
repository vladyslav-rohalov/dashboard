import { useSelector } from 'react-redux';
import { selectAccesseries, selectCoals } from '../redux/products/selectors';
import { selectError, selectHookahs } from '../redux/products/selectors';
import { selectIsLoading, selectProducts } from '../redux/products/selectors';
import { selectTobacco } from '../redux/products/selectors';

export const useProducts = () => {
  const hookahs = useSelector(selectHookahs);
  const tobacco = useSelector(selectTobacco);
  const coals = useSelector(selectCoals);
  const accessories = useSelector(selectAccesseries);
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return {
    hookahs,
    tobacco,
    coals,
    accessories,
    products,
    error,
    isLoading,
  };
};
