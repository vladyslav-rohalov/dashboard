import { useDispatch } from 'react-redux';
import { Controller } from 'react-hook-form';
import { addFlavor } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Flavor({
  list,
  weight,
  required = true,
  control,
  value = null,
}) {
  const dispatch = useDispatch();

  const addNewFlavor = newFlavor => {
    dispatch(addFlavor({ flavor: newFlavor }));
  };

  return (
    <Controller
      control={control}
      name="flavor"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={list}
            addNew={addNewFlavor}
            field={'flavor'}
            label={'Flavor'}
            width={weight}
            required={required}
          />
        );
      }}
    />
  );
}
