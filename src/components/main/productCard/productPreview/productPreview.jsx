import ProductItem from '../../addNew/result/productsItem/productItem';
import { Container } from './productPreview.styled';

export default function ProductPreview({ product }) {
  return (
    <Container>
      <ProductItem product={product} />
    </Container>
  );
}
