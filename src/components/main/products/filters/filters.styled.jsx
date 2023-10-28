import styled from '@emotion/styled';
import { FormControl, Box, Button } from '@mui/material';

export const Form = styled(FormControl)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 16,
});

export const PriceBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ButtonBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 32,
  margin: '32px auto',
});

export const ResetButton = styled(Button)(({ theme }) => ({
  width: 160,
  backgroundColor: theme.palette.primary.light,
}));

export const SearchButton = styled(Button)({
  width: 160,
});
