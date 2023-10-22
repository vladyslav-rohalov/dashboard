import { useDispatch } from 'react-redux';
import { addBowlType } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function BowlType({ value, onChange, list }) {
  const dispatch = useDispatch();

  const addNewBowlType = newBowlType => {
    dispatch(addBowlType({ bowl_type: newBowlType }));
  };

  return (
    <AutocompleteBase
      value={value}
      onChange={onChange}
      list={list}
      addNew={addNewBowlType}
      field={'bowl_type'}
      label={'Bowl type'}
      width={300}
      required={false}
    />
  );
}
