import { useDispatch } from 'react-redux';
import { addBrand } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Brand({ value, onChange, list }) {
  const dispatch = useDispatch();

  const addNewBrand = newBrand => {
    dispatch(addBrand({ brand: newBrand }));
  };

  return (
    <AutocompleteBase
      value={value}
      onChange={onChange}
      list={list}
      addNew={addNewBrand}
      field={'brand'}
      label={'Brand'}
      width={300}
    />
  );
}
