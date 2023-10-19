import { Autocomplete, createFilterOptions } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Type({ value, onChange }) {
  const filter = createFilterOptions();

  const addNewType = newType => {
    console.log('newType: ', newType);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          addNewType(newValue.inputValue);
          onChange({ type: newValue.inputValue });
        } else {
          onChange(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option.type);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            type: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="type"
      options={typeList}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.type;
      }}
      renderOption={(props, option) => <li {...props}>{option.type}</li>}
      freeSolo
      renderInput={params => (
        <Input {...params} label="Type" width={300} required />
      )}
    />
  );
}

const typeList = [
  { type: 'bowl' },
  { type: 'hose' },
  { type: 'tongs' },
  { type: 'charcoal holder' },
  { type: 'seals' },
  { type: 'cleaners' },
  { type: 'flask' },
  { type: 'other' },
];
