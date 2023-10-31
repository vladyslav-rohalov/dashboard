import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const CardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 216,
  boxSizing: 'content-box',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 4,
}));

export const ImageBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 16,
  marginTop: 16,
  listStyle: 'none',
});

export const IconBtnStyled = styled(IconButton)({
  position: 'absolute',
  top: 0,
  right: 0,
});

export const IconDelete = styled(DeleteIcon)(({ theme }) => ({
  color: theme.palette.primary.hot,
}));

export const Image = styled('img')({
  objectFit: 'cover',
  borderRadius: 4,
});
