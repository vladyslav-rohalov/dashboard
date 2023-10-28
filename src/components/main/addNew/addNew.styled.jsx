import { styled } from '@mui/material/styles';
import { Box, Typography, TextField } from '@mui/material';

export const FiltersBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  marginTop: 16,
  gap: 16,
  flexWrap: 'wrap',
});

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.palette.primary.text,
  textAlign: 'center',
}));

export const Input = styled(TextField, {
  shouldForwardProp: prop =>
    prop !== 'err' && prop !== 'width' && prop !== 'mt',
})(({ err, width, mt, theme }) => ({
  width: width || 200,
  marginTop: mt || 0,
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
