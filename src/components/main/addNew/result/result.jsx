import ProductItem from './productsItem/productItem';
import { Container, ButtonBlock, Button } from './result.styled';

export default function Result({ product, handlePublish, handleFinish }) {
  console.log(product);

  return (
    <Container>
      <ProductItem product={product} />
      <ButtonBlock>
        <Button variant="contained" onClick={handleFinish}>
          Skip
        </Button>
        <Button variant="contained" onClick={handlePublish}>
          Publish
        </Button>
      </ButtonBlock>
    </Container>
  );
}
