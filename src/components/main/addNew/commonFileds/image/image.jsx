import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Images({ width = 120, control }) {
  return (
    <Controller
      control={control}
      name="image"
      defaultValue={''}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <InputLabel id="status-label">Images</InputLabel>
            <Select
              name="image"
              label="Images"
              value={value}
              onChange={e => onChange(e.target.value)}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        );
      }}
    />
  );
}
