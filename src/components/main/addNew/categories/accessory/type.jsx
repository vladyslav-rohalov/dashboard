import { useDispatch } from 'react-redux';
import { Controller } from 'react-hook-form';
import { addAccessoryType } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Type({ list, width, required, control }) {
  const dispatch = useDispatch();

  const addNewType = newType => {
    dispatch(addAccessoryType({ type: newType }));
  };

  return (
    <Controller
      control={control}
      name="type"
      defaultValue={null}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={list}
            addNew={addNewType}
            field={'type'}
            label={'Accessory type'}
            width={width}
            required={required}
          />
        );
      }}
    />
  );
}
