import MuiPagination from '@mui/material/Pagination';
import { FormControl, Select, MenuItem } from '@mui/material';
import { StackStyled } from './pagination.styled';

export default function Pagination({
  page,
  limit,
  pageCount,
  onPageChange,
  onLimitChange,
}) {
  return (
    <StackStyled spacing={2}>
      <FormControl>
        <Select
          name="perPage"
          value={limit}
          onChange={e => onLimitChange(e.target.value)}
          size="small"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <MuiPagination
        page={page}
        count={pageCount}
        onChange={(e, page) => onPageChange(page)}
      />
    </StackStyled>
  );
}
