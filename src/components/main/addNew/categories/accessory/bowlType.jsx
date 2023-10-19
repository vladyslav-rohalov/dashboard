import { FormControl, InputLabel, Select } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function BowlType({ value, onChange }) {
  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="bowl-type-label">Bowl type</InputLabel>
      <Select
        name="bowl-type"
        label="Bowl type"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <MenuItem value={null}>None</MenuItem>
        <MenuItem value={'turkish'}>Turkish</MenuItem>
        <MenuItem value={'phunnel'}>Phunnel</MenuItem>
        <MenuItem value={'vortex'}>Vortex</MenuItem>
        <MenuItem value={'evil'}>Evil</MenuItem>
      </Select>
    </FormControl>
  );
}
