import { Container, Text, RatingStyled } from './rating.styled';

export default function ProductRating() {
  return (
    <Container>
      <RatingStyled
        name="half-rating"
        precision={0.5}
        value={0}
        readOnly
        size={'small'}
      />
      <Text>{0} review</Text>
    </Container>
  );
}
