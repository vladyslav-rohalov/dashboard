import styled from '@emotion/styled';
import { Box, Button, FormControl, Typography } from '@mui/material';

export const Form = styled(FormControl)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 16,
  width: '100%',
  marginTop: 32,
});

export const Text = styled(Typography)({
  fontSize: '0.75rem',
});

export const DateBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  marginTop: 16,
});

export const SaveButton = styled(Button)({ width: 160, margin: '16px auto' });
