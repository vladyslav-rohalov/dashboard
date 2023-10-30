import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Status({
  width = 120,
  control,
  required = true,
  value = '',
}) {
  return (
    <Controller
      control={control}
      name="status"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              name="status"
              label="Status"
              required={required}
              value={value}
              onChange={e => onChange(e.target.value)}
            >
              <MenuItem value={'in stock'}>In stock</MenuItem>
              <MenuItem value={'out of stock'}>Out of stock</MenuItem>
              <MenuItem value={'ending'}>Ending</MenuItem>
              <MenuItem value={'awaiting'}>Awaiting</MenuItem>
            </Select>
          </FormControl>
        );
      }}
    />
  );
}
