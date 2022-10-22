import { FavoriteDogE } from '../entity';
import { DogE } from '../entity/dog';

export interface HomeRepositoryI {
  getDogs: () => Promise<DogE[]>;
  saveFavouriteDog: (dog: DogE) => Promise<any>;
  removeFavouriteDog: (dog: FavoriteDogE) => Promise<any>;
  getFavouriteDogs: () => Promise<any>;
}
