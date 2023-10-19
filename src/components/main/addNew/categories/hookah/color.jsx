import { Autocomplete, createFilterOptions } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Color({ value, onChange }) {
  const filter = createFilterOptions();

  const addNewcolor = newcolor => {
    console.log('newColor: ', newcolor);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          addNewcolor(newValue.inputValue);
          onChange({ color: newValue.inputValue });
        } else {
          onChange(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option.color);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            color: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="colors"
      options={colorList}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.color;
      }}
      renderOption={(props, option) => <li {...props}>{option.color}</li>}
      freeSolo
      renderInput={params => (
        <Input {...params} label="color" width={300} required />
      )}
    />
  );
}

const colorList = [
  { color: 'red, #FFFFFF' },
  { color: 'white, #FFFFFF' },
  { color: 'black, #FFFFFF' },
  { color: 'blue, #FFFFFF' },
  { color: 'yellow, #FFFFFF' },
  { color: 'green, #FFFFFF' },
];
