import { useDispatch } from 'react-redux';
import { addFlavor } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Flavor({ value, onChange, list }) {
  const dispatch = useDispatch();

  const addNewFlavor = newFlavor => {
    dispatch(addFlavor({ flavor: newFlavor }));
  };

  return (
    <AutocompleteBase
      value={value}
      onChange={onChange}
      list={list}
      addNew={addNewFlavor}
      field={'flavor'}
      label={'Flavor'}
      width={300}
    />
  );
}
