import { Autocomplete, createFilterOptions } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function HookahSize({ value, onChange }) {
  const filter = createFilterOptions();

  const addNewSize = newSize => {
    console.log('newsize: ', newSize);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          addNewSize(newValue.inputValue);
          onChange({ size: newValue.inputValue });
        } else {
          onChange(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option.size);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            size: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="size"
      options={sizeList}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.size;
      }}
      renderOption={(props, option) => <li {...props}>{option.size}</li>}
      freeSolo
      renderInput={params => (
        <Input {...params} label="size" width={300} required />
      )}
    />
  );
}

const sizeList = [
  { size: 'big' },
  { size: 'medium' },
  { size: 'small' },
  { size: 'portable' },
];
