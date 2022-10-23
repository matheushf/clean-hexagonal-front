import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { logger } from '../../../shared/adapter/logger';
import { Repository } from '../../adapter/repository';
import { DogE } from '../../domain/entity';

export function useDetails() {
  const { dogId } = useParams<{ dogId: string }>();
  const [dog, setDog] = useState<DogE>();

  async function fetchDog() {
    if (!dogId) return;

    try {
      const response = await Repository.dog.getDogById(dogId);
      setDog(response);
    } catch (error: any) {
      logger.info(error.message);
    }
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return {
    dog,
  };
}
