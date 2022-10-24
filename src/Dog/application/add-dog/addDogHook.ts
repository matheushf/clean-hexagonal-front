import { useState } from 'react';
import { Repository } from '../../adapter/repository';
import { DogE } from '../../domain/entity';

export function useAddDog() {
  const [dogs, setDogs] = useState<Partial<DogE>[]>();

  function onSave(dog: Partial<DogE>, formik: any) {
    formik.resetForm();

    const response = Repository.dog.addDog(dog);
    setDogs([...response]);
  }

  return { dogs, onSave };
}
