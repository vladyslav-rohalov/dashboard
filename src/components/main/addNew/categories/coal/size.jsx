import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function CoalSize({ control, required = true, width = 200 }) {
  return (
    <Controller
      control={control}
      name="size"
      defaultValue={''}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl>
            <Input
              mt={0}
              width={width}
              required={required}
              label="Size"
              id="size"
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
