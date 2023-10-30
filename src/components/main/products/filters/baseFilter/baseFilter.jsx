import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../../addNew/addNew.styled';

export default function BaseFilter({
  width = 120,
  control,
  name,
  label,
  value = '',
  disabled = false,
}) {
  return (
    <Controller
      name={name}
      defaultValue={value}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <Input
              mt={0}
              width={width}
              label={label}
              id={name}
              type="text"
              autoComplete="off"
              value={value}
              onChange={e => onChange(e.target.value)}
              disabled={disabled}
            />
          </FormControl>
        );
      }}
    />
  );
}
