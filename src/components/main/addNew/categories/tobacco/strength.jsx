import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function Strength({ value, onChange }) {
  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="strength-label">Strength</InputLabel>
      <Select
        name="strength"
        label="Strength"
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
}
