import { RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { Radio, FormLabel } from '@mui/material';

export default function SetCatergory({ handleCategory, withAll = false }) {
  return (
    <FormControl onChange={e => handleCategory(e.target.value)} sx={{ mt: 4 }}>
      <FormLabel id="radio-buttons-group-label">Category</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue={withAll ? 'all' : 'hookah'}
        name="radio-buttons-group"
        sx={{ flexDirection: 'row' }}
      >
        {withAll && (
          <FormControlLabel value="all" control={<Radio />} label="All" />
        )}
        <FormControlLabel value="hookah" control={<Radio />} label="Hookah" />
        <FormControlLabel value="tobacco" control={<Radio />} label="Tobacco" />
        <FormControlLabel value="coal" control={<Radio />} label="Coal" />
        <FormControlLabel
          value="accessories"
          control={<Radio />}
          label="Accessories"
        />
      </RadioGroup>
    </FormControl>
  );
}
