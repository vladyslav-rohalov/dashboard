import AddPhoto from '../../addNew/addPhoto/addPhoto';
import { Container, CardContainer, Image } from './productPhoto.styled';
import { ImageBlock, IconBtnStyled, IconDelete } from './productPhoto.styled';

export default function ProductPhoto({ product, handleRefetch }) {
  const { id, images, title } = product;
  // console.log(images);
  return (
    <Container>
      {images && (
        <ImageBlock component="ul">
          {images.map(image => {
            return (
              <CardContainer key={image} component="li">
                <Image src={image} width={200} height={216} alt={title} />
                <IconBtnStyled>
                  <IconDelete />
                </IconBtnStyled>
              </CardContainer>
            );
          })}
        </ImageBlock>
      )}
      <AddPhoto id={product.id} onSuccess={() => handleRefetch(id)} />
    </Container>
  );
}
