import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Price({ value, onChange }) {
  return (
    <FormControl>
      <Input
        // err={errors?.email}
        mt={0}
        width={200}
        required
        label="Price"
        id="price"
        type="number"
        autoComplete="off"
        value={value}
        onChange={e => onChange(+e.target.value)}
      />
      {/* {errors?.price && (
        <OnError
          text={
            errors?.email?.message
              ? errors.email.message
              : 'Invalid email or password'
          }
        />
      )} */}
    </FormControl>
  );
}
