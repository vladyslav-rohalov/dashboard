import { Typography } from '@mui/material';
import { SubmitButton } from '../../addNew/addPhoto/addPhoto.styled';
import { IconDelete } from '../productPhoto/productPhoto.styled';
import { Container } from '../productPreview/productPreview.styled';

export default function DeleteProduct({ handleDelete }) {
  return (
    <Container>
      <Typography>
        Removing this product is permanent, it will not be possible to restore
        it. All images will also be deleted.
      </Typography>
      <SubmitButton
        variant="contained"
        startIcon={<IconDelete />}
        onClick={handleDelete}
      >
        Delete
      </SubmitButton>
    </Container>
  );
}
