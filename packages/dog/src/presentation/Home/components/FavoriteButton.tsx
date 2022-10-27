import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHomeContext } from '../../../application/home/homeContext';
import { DogE } from '../../../domain/entity';
import { getFavoriteLabel } from '../../../domain/services/homeService';

function FavoriteButton({ dog }: { dog: DogE }) {
  const { t } = useTranslation('home');
  const { onStar, favouriteDogs, savingFavoriteId } = useHomeContext();
  const isSavingFavorite = savingFavoriteId === dog.image.id;

  return (
    <button type="button" onClick={() => onStar(dog)}>
      {isSavingFavorite && t('starSavingButton')}
      {!isSavingFavorite && getFavoriteLabel(dog, favouriteDogs)}
    </button>
  );
}

export { FavoriteButton };
