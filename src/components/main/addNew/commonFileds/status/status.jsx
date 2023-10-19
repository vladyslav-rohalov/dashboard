import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Status({ value, onChange }) {
  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="status-label">Status</InputLabel>
      <Select
        name="status"
        label="Status"
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
}
