import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Available({ width, control, required = true }) {
  return (
    <Controller
      name="available"
      defaultValue={''}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl>
            <Input
              mt={0}
              width={width}
              required={required}
              label="Available"
              id="available"
              type="text"
              autoComplete="off"
              value={value}
              onChange={e => onChange(e.target.value)}
            />
          </FormControl>
        );
      }}
    />
  );
}
