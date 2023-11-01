import { Table, TableBody } from '@mui/material';
import { TableHead, TableRow, IconButton, Badge } from '@mui/material';
import { StyledTableCell, TableContainerStyled } from './resultTable.styled';
import { IconImage, StyledTableRow, IconInfo } from './resultTable.styled';

export default function ResultTable({ products, handleOpenCard }) {
  const defineCat = product => {
    if (product?.hookahs && product?.hookahs !== null) {
      return 'hookahs';
    } else if (product?.tobacco && product?.tobacco !== null) {
      return 'tobacco';
    } else if (product?.coals && product?.coals !== null) {
      return 'coals';
    } else if (product?.accessories && product?.accessories !== null) {
      return 'accessories';
    }
  };
  console.log(products);
  const formatDate = date => {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  return (
    <TableContainerStyled>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Id</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Images</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Available</StyledTableCell>
            <StyledTableCell align="left">Publish</StyledTableCell>
            <StyledTableCell align="left">Brand</StyledTableCell>
            <StyledTableCell align="left">Promotion</StyledTableCell>
            <StyledTableCell align="left">Created</StyledTableCell>
            <StyledTableCell align="left">Updated</StyledTableCell>
            <StyledTableCell align="left">Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.id}
              </StyledTableCell>
              <StyledTableCell align="left">
                {defineCat(product)}
              </StyledTableCell>
              <StyledTableCell align="left">{product.status}</StyledTableCell>
              <StyledTableCell align="left">
                <Badge
                  badgeContent={product.images?.length || 0}
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      minWidth: 12,
                      height: 12,
                      fontSize: 8,
                      padding: 0,
                    },
                  }}
                >
                  <IconImage image={!!product.images} />
                </Badge>
              </StyledTableCell>
              <StyledTableCell align="left">{product.price}</StyledTableCell>
              <StyledTableCell align="left">
                {product.available}
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.publish ? 'Yes' : 'No'}
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.brand.brand}
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.promotion.promotion}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatDate(product.createdAt)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatDate(product.updatedAt)}
              </StyledTableCell>
              <StyledTableCell align="left">
                <IconButton onClick={() => handleOpenCard(product.id)}>
                  <IconInfo />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
}
