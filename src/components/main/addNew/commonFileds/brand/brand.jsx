import { useDispatch } from 'react-redux';
import { addBrand } from '../../../../../redux/enums/operations';
import { Autocomplete, createFilterOptions } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Brand({ value, onChange, list }) {
  const filter = createFilterOptions();
  const dispatch = useDispatch();

  const addNewBrand = newBrand => {
    dispatch(addBrand({ brand: newBrand }));
  };

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          addNewBrand(newValue.inputValue);
          onChange({ brand: newValue.inputValue });
        } else {
          onChange(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option.brand);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            brand: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="brands"
      options={list}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.brand;
      }}
      renderOption={(props, option) => <li {...props}>{option.brand}</li>}
      freeSolo
      renderInput={params => (
        <Input {...params} label="Brand" width={300} required />
      )}
    />
  );
}
