import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Status({ width, control, required = true }) {
  return (
    <Controller
      control={control}
      name="status"
      defaultValue={'in stock'}
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
