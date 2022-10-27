import { FavoriteDogE } from '../entity';
import { DogE } from '../entity/dog';

export interface DogRepositoryI {
  getDogs: () => Promise<DogE[]>;
  getDogById(dogId: string): Promise<DogE>;
  saveFavouriteDog: (dog: DogE) => Promise<any>;
  removeFavouriteDog: (dog: FavoriteDogE) => Promise<any>;
  getFavouriteDogs: () => Promise<any>;
  getDogsLocalStorage: () => Partial<DogE>[];
  addDogMemory: (dog: Partial<DogE>) => Partial<DogE>[];
  addDogStorage: (dog: Partial<DogE>) => Partial<DogE>[];
}
