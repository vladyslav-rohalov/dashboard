import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Price({ width, control, required = true }) {
  return (
    <Controller
      name="price"
      defaultValue={''}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl>
            <Input
              mt={0}
              width={width}
              required={required}
              label="Price"
              id="price"
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
