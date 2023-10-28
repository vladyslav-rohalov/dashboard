import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addHookahSize } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function HookahSize({ list, width, control, required }) {
  const dispatch = useDispatch();

  const addNewBrand = newBrand => {
    dispatch(addHookahSize({ hookah_size: newBrand }));
  };

  return (
    <Controller
      control={control}
      name="hookah_size"
      defaultValue={null}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={list}
            addNew={addNewBrand}
            field={'hookah_size'}
            label={'Hookah size'}
            width={width}
            required={required}
          />
        );
      }}
    />
  );
}
