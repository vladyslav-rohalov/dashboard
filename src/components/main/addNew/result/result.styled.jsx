import { styled } from '@mui/material/styles';
import { Box, Button as MuiButton } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 32,
});

export const ButtonBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
});

export const Button = styled(MuiButton)({
  width: 100,
});
