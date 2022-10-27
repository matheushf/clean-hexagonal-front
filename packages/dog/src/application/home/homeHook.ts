import { useEffect, useState } from 'react';
import { Repository } from '../../adapter/repository';
import { FavoriteDogE } from '../../domain/entity';
import { DogE } from '../../domain/entity/dog';
import { getFavoriteDog } from '../../domain/services/homeService';

export function useHome() {
  const [dogs, setDogs] = useState<DogE[]>([]);
  const [favouriteDogs, setFavouriteDogs] = useState<FavoriteDogE[]>([]);
  const [savingFavoriteId, setSavingFavoriteId] = useState('');

  async function fetchDogs() {
    const response = await Repository.dog.getDogs();
    setDogs(response);
  }

  async function saveFavouriteDog(dog: DogE) {
    try {
      setSavingFavoriteId(dog.image.id);
      const response = await Repository.dog.saveFavouriteDog(dog);
      console.log('save', response);
      setFavouriteDogs([...favouriteDogs, { image_id: dog.image.id, id: response.id }]);
      setSavingFavoriteId('');
    } catch (error) {
      setFavouriteDogs(favouriteDogs);
    }
  }

  async function removeFavoriteDog(favoriteDog: FavoriteDogE) {
    try {
      const newFavoriteDogs = favouriteDogs?.filter(
        (favorite) => favorite.image_id !== favoriteDog.image_id,
      );
      setFavouriteDogs(newFavoriteDogs);
      await Repository.dog.removeFavouriteDog(favoriteDog);
    } catch (error) {
      setFavouriteDogs(favouriteDogs);
    }
  }

  async function fetchFavouriteDogs() {
    const response = await Repository.dog.getFavouriteDogs();
    setFavouriteDogs(response);
  }

  async function onStar(dog: DogE) {
    const favoriteDog = getFavoriteDog(dog, favouriteDogs);

    console.log('star ', favoriteDog);

    if (favoriteDog) {
      await removeFavoriteDog(favoriteDog);
    } else {
      await saveFavouriteDog(dog);
    }
  }

  useEffect(() => {
    fetchDogs();
    fetchFavouriteDogs();
  }, []);

  return {
    dogs,
    favouriteDogs,
    savingFavoriteId,
    onStar,
  };
}
