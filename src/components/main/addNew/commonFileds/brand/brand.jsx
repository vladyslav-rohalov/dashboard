import { useDispatch } from 'react-redux';
import { Controller } from 'react-hook-form';
import { addBrand } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Brand({ list, required, weight, control }) {
  const dispatch = useDispatch();

  const addNewBrand = newBrand => {
    dispatch(addBrand({ brand: newBrand }));
  };

  return (
    <Controller
      control={control}
      name="brand"
      defaultValue={null}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={list}
            addNew={addNewBrand}
            field="brand"
            label="Brand"
            width={weight}
            required={required}
          />
        );
      }}
    />
  );
}
