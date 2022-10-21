import { useEffect, useState } from 'react';
import { DogRepository } from '../adapter/repository';

export function useHomeService() {
  const [dogs, setDogs] = useState();

  async function init() {
    const response = await DogRepository.home.getDogs();
    setDogs(response);
  }

  useEffect(() => {
    init();
  }, []);

  return {
    dogs,
  };
}
