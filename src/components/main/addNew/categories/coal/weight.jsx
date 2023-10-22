import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function CoalWeight({ value, onChange }) {
  return (
    <FormControl>
      <Input
        mt={0}
        width={200}
        required
        label="Weight"
        id="coal_weight"
        type="text"
        autoComplete="off"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FormControl>
  );
}
