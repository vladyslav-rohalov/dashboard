import { useDispatch } from 'react-redux';
import { Controller } from 'react-hook-form';
import { addPromotion } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function Promotion({
  list,
  width = 160,
  required = true,
  control,
  value = null,
}) {
  const dispatch = useDispatch();

  const addNewPromotion = newPromotion => {
    dispatch(addPromotion({ promotion: newPromotion }));
  };

  return (
    <Controller
      control={control}
      name="promotion"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={list}
            addNew={addNewPromotion}
            field={'promotion'}
            label={'Promotion'}
            width={width}
            required={required}
          />
        );
      }}
    />
  );
}
