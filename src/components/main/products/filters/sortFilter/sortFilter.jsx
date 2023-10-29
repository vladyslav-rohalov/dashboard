import { Controller } from 'react-hook-form';
import { InputLabel, MenuItem, FormControl } from '@mui/material/';
import { Select } from '@mui/material';
import { Container } from './sortFilter.styled';

export default function SortFilter({ control }) {
  return (
    <Container>
      <FormControl size="small" sx={{ width: { xs: 150, sm: 200 } }}>
        <InputLabel
          id="sorting-filter-label"
          sx={{ color: 'primary.dim' }}
          className="labelSelect"
        >
          Sort
        </InputLabel>
        <Controller
          control={control}
          name="sort"
          defaultValue={''}
          render={({ field: { onChange, value } }) => {
            return (
              <Select
                labelId="sorting-filter-label"
                id="sorting-select"
                value={value}
                label="Sort"
                onChange={e => {
                  onChange(e.target.value);
                }}
              >
                <MenuItem value="">default</MenuItem>
                <MenuItem value={'cheap'}>cheap</MenuItem>
                <MenuItem value={'expensive'}>expensive</MenuItem>
                <MenuItem value={'new'}>new</MenuItem>
                <MenuItem value={'old'}>old</MenuItem>
              </Select>
            );
          }}
        />
      </FormControl>
    </Container>
  );
}
