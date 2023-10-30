import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addColor } from '../../../../../redux/enums/operations';
import AutocompleteBase from '../../autocomplete/autocomplete';

export default function HookahColor({
  list,
  width,
  control,
  required,
  value = null,
}) {
  const dispatch = useDispatch();

  const addNewColor = newColor => {
    const color = newColor.split(',');
    dispatch(
      addColor({ color: color[0].trim(), color_value: color[1].trim() })
    );
  };

  const listMod = list.map(val => {
    const { color, color_value, ...rest } = val;
    return { ...rest, color: `${color}, ${color_value}` };
  });

  return (
    <Controller
      control={control}
      name="color"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <AutocompleteBase
            value={value}
            onChange={onChange}
            list={listMod}
            addNew={addNewColor}
            field={'color'}
            label={'Hookah color'}
            width={width}
            required={required}
          />
        );
      }}
    />
  );
}
