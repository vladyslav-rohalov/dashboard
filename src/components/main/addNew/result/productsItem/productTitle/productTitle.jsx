import { Text } from './productTitle.styled';

export default function ProductTitle({ title }) {
  return (
    <>
      <Text>{title.toUpperCase()}</Text>
    </>
  );
}
