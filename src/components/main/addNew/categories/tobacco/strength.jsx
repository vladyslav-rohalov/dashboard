import { Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Strength({ width, control, required = false }) {
  return (
    <Controller
      name="strength"
      defaultValue={''}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: width }}>
            <InputLabel id="strength-label">Strength</InputLabel>
            <Select
              name="strength"
              label="Strength"
              required={required}
              value={value}
              onChange={e => onChange(e.target.value)}
            >
              <MenuItem value={'none'}>none</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        );
      }}
    />
  );
}
