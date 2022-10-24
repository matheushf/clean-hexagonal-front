import { DogRepositoryI } from '../../domain/ports/DogRepository';
import { DogE } from '../../domain/entity';

export function DogRepositoryMemory(): Pick<DogRepositoryI, 'addDog'> {
  const dogs = [] as Partial<DogE>[];

  function addDog(dog: Partial<DogE>) {
    dogs.push(dog);

    console.log('oi rpp ', dogs);

    return dogs;
  }

  return { addDog };
}
