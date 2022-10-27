import { DogRepositoryI } from '../../domain/ports/DogRepository';
import { DogE } from '../../domain/entity';

export function DogRepositoryMemory(): Pick<DogRepositoryI, 'addDogMemory'> {
  const dogs = [] as Partial<DogE>[];

  function addDogMemory(dog: Partial<DogE>) {
    dogs.push(dog);

    return dogs;
  }

  return { addDogMemory };
}
