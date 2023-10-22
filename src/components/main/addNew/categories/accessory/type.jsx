import { useDispatch } from 'react-redux';
import { addAccessoryType } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Type({ value, onChange, list }) {
  const dispatch = useDispatch();

  const addNewType = newType => {
    dispatch(addAccessoryType({ type: newType }));
  };

  return (
    <AutocompleteBase
      value={value}
      onChange={onChange}
      list={list}
      addNew={addNewType}
      field={'type'}
      label={'Accessory type'}
      width={300}
    />
  );
}
