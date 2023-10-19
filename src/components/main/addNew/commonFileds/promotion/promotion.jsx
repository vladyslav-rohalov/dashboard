import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Promotion({ value, onChange }) {
  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="promotion-label">Promotion</InputLabel>
      <Select
        name="promotion"
        label="Promotion"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <MenuItem value={'none'}>None</MenuItem>
        <MenuItem value={'hot'}>Hot</MenuItem>
        <MenuItem value={'sale'}>Sale</MenuItem>
        <MenuItem value={'new'}>New</MenuItem>
      </Select>
    </FormControl>
  );
}
