import MuiPagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

export default function Pagination({ page, pageCount, onPageChange }) {
  return (
    <Stack spacing={2}>
      <MuiPagination
        page={page}
        count={pageCount}
        onChange={(e, page) => onPageChange(page)}
      />
    </Stack>
  );
}
