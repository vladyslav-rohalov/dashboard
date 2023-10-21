import { useSelector } from 'react-redux';
import {
  selectBowl_types,
  selectBrands,
  selectColors,
  selectError,
  selectFlavors,
  selectHookah_size,
  selectIsLoading,
  selectPromotions,
  selectTypes,
} from '../redux/enums/selectors';

export const useEnum = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const bowl_types = useSelector(selectBowl_types);
  const brands = useSelector(selectBrands);
  const colors = useSelector(selectColors);
  const flavors = useSelector(selectFlavors);
  const hookah_sizes = useSelector(selectHookah_size);
  const promotions = useSelector(selectPromotions);
  const types = useSelector(selectTypes);

  return {
    isLoading,
    error,
    bowl_types,
    brands,
    colors,
    flavors,
    hookah_sizes,
    promotions,
    types,
  };
};
