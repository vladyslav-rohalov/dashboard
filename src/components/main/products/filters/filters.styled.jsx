import styled from '@emotion/styled';
import { FormControl, Box } from '@mui/material';

export const Form = styled(FormControl)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 16,
  marginTop: 16,
});

export const PriceBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
