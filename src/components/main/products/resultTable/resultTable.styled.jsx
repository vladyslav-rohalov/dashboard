import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableRow, TableContainer } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.neutral,
    color: theme.palette.text.primary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.dim,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const IconInfo = styled(SettingsIcon)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

export const IconImage = styled(ImageIcon, {
  shouldForwardProp: prop => prop !== 'image',
})(({ image, theme }) => ({
  color: image ? theme.palette.primary.light : theme.palette.primary.neutral,
}));

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  overflowX: 'visible',
  border: `1px solid ${theme.palette.text.primary}`,
}));
