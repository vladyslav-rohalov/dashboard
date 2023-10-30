import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Publish({ width = 120, control, value = '' }) {
  return (
    <Controller
      control={control}
      name="publish"
      defaultValue={value}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <InputLabel id="status-label">Publish</InputLabel>
            <Select
              name="publish"
              label="Publish"
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
