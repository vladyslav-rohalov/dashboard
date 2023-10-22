import { useSelector } from 'react-redux';
import { selectAccessories, selectCoals } from '../redux/products/selectors';
import { selectError, selectHookahs } from '../redux/products/selectors';
import { selectIsLoading, selectProducts } from '../redux/products/selectors';
import { selectTobacco, selectResponse } from '../redux/products/selectors';

export const useProducts = () => {
  const hookah = useSelector(selectHookahs);
  const tobacco = useSelector(selectTobacco);
  const coal = useSelector(selectCoals);
  const accessory = useSelector(selectAccessories);
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const response = useSelector(selectResponse);

  return {
    hookah,
    tobacco,
    coal,
    accessory,
    products,
    error,
    isLoading,
    response,
  };
};
