import { Box } from '@mui/material';
import ProductRating from '../rating/rating';
import Price from '../price/price';
import ProductTitle from '../productTitle/productTitle';
import SpeedDialCart from '../speedDialCart/speedDialCart';
import { Block, Description } from './cardDescription.styled';

export default function CardDescription({ product }) {
  const { title, price } = product;
  return (
    <Description>
      <Box>
        <ProductTitle title={title} />
      </Box>
      <ProductRating />
      <Block>
        <Price component="p" price={price} />
        <SpeedDialCart />
      </Block>
    </Description>
  );
}
