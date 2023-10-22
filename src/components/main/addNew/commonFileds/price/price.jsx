import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Price({ value, onChange }) {
  return (
    <FormControl>
      <Input
        mt={0}
        width={200}
        required
        label="Price"
        id="price"
        type="text"
        autoComplete="off"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FormControl>
  );
}
