import React from 'react';
import { useHomeContext } from '../../../application/homeContext';
import { DogE } from '../../../domain/entity';
import { getFavoriteLabel } from '../../../domain/services/homeService';

function FavoriteButton({ dog }: { dog: DogE }) {
  const { onStar, favouriteDogs, savingFavoriteId } = useHomeContext();
  const isSavingFavorite = savingFavoriteId === dog.image.id;

  return (
    <button type="button" onClick={() => onStar(dog)}>
      {isSavingFavorite && 'Saving'}
      {!isSavingFavorite && getFavoriteLabel(dog, favouriteDogs)}
    </button>
  );
}

export { FavoriteButton };
