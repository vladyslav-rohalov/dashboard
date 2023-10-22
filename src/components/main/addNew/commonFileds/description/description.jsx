import { FormControl } from '@mui/material';
import { Input } from '../../addNew.styled';

export default function Description({ value, onChange }) {
  return (
    <FormControl sx={{ width: '100%' }}>
      <Input
        // err={errors?.email}
        mt={0}
        width={'100%'}
        required
        label="Description"
        id="description"
        type="text"
        autoComplete="off"
        value={value}
        onChange={e => onChange(e.target.value)}
        multiline
        inputProps={{
          style: {
            height: '200px',
            overflow: 'auto',
          },
        }}
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
