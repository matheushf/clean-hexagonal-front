import { useEffect, useState } from 'react';
import { DogRepository } from '../adapter/repository';
import { DogI } from '../domain/entity/dog';

export function useHome() {
  const [dogs, setDogs] = useState<DogI[]>();

  async function fetchDogs() {
    const response = await DogRepository.home.getDogs();
    setDogs(response);
  }

  useEffect(() => {
    fetchDogs();
  }, []);

  return {
    dogs,
  };
}
