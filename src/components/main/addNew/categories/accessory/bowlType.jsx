import { useDispatch } from 'react-redux';
import { Controller } from 'react-hook-form';
import { addBowlType } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function BowlType({
  list,
  width,
  required = false,
  control,
  value = null,
}) {
  const dispatch = useDispatch();

  const addNewBowlType = newBowlType => {
    dispatch(addBowlType({ bowl_type: newBowlType }));
  };
  return (
    <Controller
      control={control}
      name="bowl_type"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={list}
            addNew={addNewBowlType}
            field={'bowl_type'}
            label={'Bowl type'}
            width={width}
            required={required}
          />
        );
      }}
    />
  );
}
