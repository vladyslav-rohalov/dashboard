import { useDispatch } from 'react-redux';
import { addPromotion } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Promotion({ value, onChange, list }) {
  const dispatch = useDispatch();

  const addNewPromotion = newPromotion => {
    dispatch(addPromotion({ promotion: newPromotion }));
  };

  return (
    <AutocompleteBase
      value={value}
      onChange={onChange}
      list={list}
      addNew={addNewPromotion}
      field={'promotion'}
      label={'Promotion'}
      width={200}
    />
  );
}
