import { useEffect, useState } from 'react';
import { Repository } from '../../adapter/repository';
import { DogE } from '../../domain/entity';
import { DogFormValuesT } from '../../domain/schema/dogValidationSchema';

export function useAddDog() {
  const [dogs, setDogs] = useState<Partial<DogE>[]>([]);

  function onSave(dog: DogFormValuesT, formik: any) {
    formik.resetForm();

    if (dog.saveOn === 'memory') {
      const response = Repository.dog.addDogMemory(dog);
      setDogs([...dogs, ...response]);
    } else {
      const response = Repository.dog.addDogStorage(dog);
      setDogs([...response]);
    }
  }

  function fetchDogs() {
    const response = Repository.dog.getDogsLocalStorage();
    setDogs(response);
  }

  useEffect(() => {
    fetchDogs();
  }, []);

  return { dogs, onSave };
}
