import { DogRepositoryI } from '../../domain/ports/DogRepository';
import { DogE } from '../../domain/entity';

export function DogRepositoryStorage(): Pick<
  DogRepositoryI,
  'addDogStorage' | 'getDogsLocalStorage'
> {
  const dogs = [] as Partial<DogE>[];
  const dogsKey = 'dogs-storage';
  const configKey = 'form-config';

  function addDogStorage(dog: Partial<DogE>) {
    dogs.push(dog);

    localStorage.setItem(dogsKey, JSON.stringify(dogs));
    localStorage.setItem(configKey, JSON.stringify({ saveOn: 'storage' }));

    return dogs;
  }

  function getDogsLocalStorage() {
    const response = localStorage.getItem(dogsKey) || '';
    Object.assign(dogs, JSON.parse(response));
    return dogs;
  }

  return { addDogStorage, getDogsLocalStorage };
}
