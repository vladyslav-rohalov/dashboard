import { Autocomplete, createFilterOptions } from '@mui/material';
import { Input } from '../addNew.styled';

export default function AutocompleteBase({
  label,
  width,
  list,
  addNew,
  field,
  value,
  onChange,
  required = true,
}) {
  const filter = createFilterOptions();

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        if (typeof newValue === 'string') {
          onChange(newValue);
        } else if (newValue && newValue.inputValue) {
          addNew(newValue.inputValue);
          onChange({ [field]: newValue.inputValue });
        } else {
          onChange(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option[field]);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            [field]: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={label}
      options={list}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option[field];
      }}
      renderOption={(props, option) => <li {...props}>{option[field]}</li>}
      freeSolo
      renderInput={params => (
        <Input {...params} label={label} width={width} required={required} />
      )}
    />
  );
}
