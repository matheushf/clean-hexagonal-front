import { DogI } from '../entity/dog';

export interface HomeRepositoryI {
  getDogs: () => Promise<DogI[]>;
  saveFavouriteDogImage: () => Promise<any>;
}
