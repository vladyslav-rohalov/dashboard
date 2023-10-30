import { Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Description({
  width = '100%',
  control,
  value = '',
  required = true,
}) {
  return (
    <Controller
      control={control}
      name="description"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <Input
              mt={0}
              width={width}
              required={required}
              label="Description"
              id="description"
              type="text"
              autoComplete="off"
              value={value}
              onChange={e => onChange(e.target.value)}
              multiline
              inputProps={{
                style: {
                  height: '200px',
                  overflow: 'auto',
                },
              }}
            />
          </FormControl>
        );
      }}
    />
  );
}
