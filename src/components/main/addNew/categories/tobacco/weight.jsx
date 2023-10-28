import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function TobaccoWeight({
  width = 200,
  control,
  required = true,
}) {
  return (
    <Controller
      control={control}
      name="tobacco_weight"
      defaultValue={''}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl>
            <Input
              mt={0}
              width={width}
              required={required}
              label="Weight"
              id="tobacco_weight"
              type="text"
              autoComplete="off"
              value={value}
              onChange={e => onChange(+e.target.value)}
            />
          </FormControl>
        );
      }}
    />
  );
}
