import { useDispatch } from 'react-redux';
import { removeImages } from '../../../../redux/products/operations';
import { useForm, Controller } from 'react-hook-form';
import AddPhoto from '../../addNew/addPhoto/addPhoto';
import { FormControl, Checkbox } from '@mui/material';
import { Container, CardContainer, Image } from './productPhoto.styled';
import { ImageBlock, IconDelete } from './productPhoto.styled';
import { SubmitButton } from '../../addNew/addPhoto/addPhoto.styled';

export default function ProductPhoto({ product, handleRefetch }) {
  const { id, images, title } = product;
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleDeleteImages = data => {
    const deleteIndexes = [];
    data.images.forEach((item, index) => {
      if (item === true) {
        deleteIndexes.push(index);
      }
    });
    const imagesToDelete = images.filter((image, index) => {
      return deleteIndexes.includes(index);
    });
    dispatch(removeImages({ id, images: imagesToDelete }));
  };

  return (
    <Container>
      {images && (
        <FormControl
          component={'form'}
          onSubmit={handleSubmit(handleDeleteImages)}
        >
          <ImageBlock component="ul">
            {images.map((image, index) => {
              return (
                <CardContainer key={image} component="li">
                  <Image src={image} width={200} height={216} alt={title} />
                  <Controller
                    name={`images[${index}]`}
                    control={control}
                    defaultValue={false}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Checkbox
                          value={value}
                          onChange={onChange}
                          sx={{ position: 'absolute', top: 0, right: 0 }}
                        />
                      );
                    }}
                  />
                </CardContainer>
              );
            })}
          </ImageBlock>
          <SubmitButton
            variant="contained"
            startIcon={<IconDelete />}
            type="submit"
          >
            Delete
          </SubmitButton>
        </FormControl>
      )}
      <AddPhoto id={product.id} onSuccess={() => handleRefetch(id)} />
    </Container>
  );
}
