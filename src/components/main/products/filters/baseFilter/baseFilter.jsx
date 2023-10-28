import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../../addNew/addNew.styled';

export default function BaseFilter({ width = 120, control, name, label }) {
  return (
    <Controller
      name={name}
      defaultValue={''}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl>
            <Input
              mt={0}
              width={width}
              label={label}
              id={name}
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
