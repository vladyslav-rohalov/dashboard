import { styled } from '@mui/material/styles';
import { Box, Typography, Tab } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.main,
  width: '240px',
  height: '100%',
  padding: '16px 0 16px 16px',
}));

export const GreetingBlock = styled(Box)({
  marginBottom: 32,
});

export const GreetingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dim,
  fontSize: '1.25rem',
  fontWeight: 500,
}));

export const TabStyled = styled(Tab)(({ theme }) => ({
  width: '100%',
  alignItems: 'baseline',
  color: theme.palette.primary.dim,
  borderRadius: 4,
}));
