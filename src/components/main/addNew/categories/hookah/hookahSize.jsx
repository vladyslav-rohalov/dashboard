import { useDispatch } from 'react-redux';
import { addHookahSize } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function HookahSize({ value, onChange, list }) {
  const dispatch = useDispatch();

  const addNewBrand = newBrand => {
    dispatch(addHookahSize({ hookah_size: newBrand }));
  };

  return (
    <AutocompleteBase
      value={value}
      onChange={onChange}
      list={list}
      addNew={addNewBrand}
      field={'hookah_size'}
      label={'Hookah size'}
      width={300}
    />
  );
}
