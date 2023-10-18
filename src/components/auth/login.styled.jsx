import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography } from '@mui/material';

const bgimage = `url(${require('../..//images/smokeTown.png')})`;

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundImage: bgimage,
  backgroundSize: 'cover',
}));

export const LoginBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  backgroundColor: theme.palette.primary.dim,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
  [theme.breakpoints.up('xs')]: {
    width: '80%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '70%',
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '30%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '20%',
  },
}));

export const Input = styled(TextField, {
  shouldForwardProp: prop => prop !== 'err',
})(({ err, theme }) => ({
  width: '100%',
  marginTop: 16,
  input: {
    color: err ? theme.palette.primary.hot : theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : theme.palette.primary.main,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: err ? theme.palette.primary.hot : theme.palette.primary.light,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: err
        ? theme.palette.primary.hot
        : theme.palette.primary.light,
    },
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: 16,
  height: 48,
  backgroundColor: theme.palette.primary.light,
}));

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  paddingTop: 16,
  color: theme.palette.primary.text,
  margin: '0 auto',
}));
