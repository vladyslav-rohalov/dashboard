import { useState } from 'react';
import { IconFavorite, IconFavoriteBorder } from './favoriteIcon.styled';
import { IconButton } from './favoriteIcon.styled';

export default function FavoriteIcon() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <IconButton
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
      size="small"
    >
      {isFavorite ? <IconFavorite /> : <IconFavoriteBorder />}
    </IconButton>
  );
}
