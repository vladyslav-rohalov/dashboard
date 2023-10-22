import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CollectionsIcon from '@mui/icons-material/Collections';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
  border: `1px solid ${theme.palette.primary.light}`,
  padding: 16,
  marginTop: 32,
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const MainBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ImagesBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 16,
  listStyle: 'none',
  marginTop: 16,
});

export const Text = styled(Typography)({
  fontWeight: 500,
});

export const ImageBlock = styled(Box)({
  position: 'relative',
  paddingBottom: 16,
});

export const IconImage = styled(CollectionsIcon)({
  fontSize: 40,
});

export const IconDelete = styled(ClearIcon)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: '1.25rem',
  color: theme.palette.primary.light,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.accent,
  },
}));

export const IconRotate = styled(RotateRightIcon)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  fontSize: '1.25rem',
  color: theme.palette.primary.light,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.accent,
  },
}));

export const SubmitButton = styled(Button)({
  width: 160,
  margin: '32px auto',
});

export const UploadButton = styled(Button)(({ theme }) => ({
  width: 160,
  height: 40,
  backgroundColor: theme.palette.primary.main,
}));

export const Input = styled('input')({
  opacity: 0,
  width: 0,
  height: 0,
  lineHeight: 0,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
});
