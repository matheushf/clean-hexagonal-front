import { plainToInstance } from 'class-transformer';
import { DogRepositoryI } from '../../domain/ports/DogRepository';
import { HttpI } from '../../../shared/domain/ports/http';
import { DogE, FavoriteDogE } from '../../domain/entity';

export function DogRepositoryHttp(http: HttpI): Omit<DogRepositoryI, 'addDog'> {
  const commonConfig = {
    baseURL: 'https://api.thedogapi.com/v1/',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_zrycHb91rLeX2wTEovXkDqoQP2KcaBtfh5ZS7BJQXmZPDzpQl3fgxgTuFsJUWAO4',
    },
  };

  function getDogs() {
    return http
      .get('/breeds?limit=10&page=0', commonConfig)
      .then((dogs) => plainToInstance(DogE, dogs));
  }

  function getDogById(dogId: string) {
    return http.get(`/breeds/${dogId}`, commonConfig);
  }

  function getFavouriteDogs() {
    return http.get('/favourites', commonConfig);
  }

  function saveFavouriteDog(dog: DogE) {
    return http.post(
      '/favourites',
      {
        image_id: dog.image.id,
      },
      commonConfig,
    );
  }

  function removeFavouriteDog(favoriteDog: FavoriteDogE) {
    return http.delete(`/favourites/${favoriteDog.id}`, commonConfig);
  }

  return { getDogs, getDogById, saveFavouriteDog, getFavouriteDogs, removeFavouriteDog };
}
