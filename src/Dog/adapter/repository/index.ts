import { AxiosAdapter } from '../axios';
import { DogRepositoryHttp } from './dogRepositoryHttp';
import { DogRepositoryMemory } from './dogRepositoryMemory';

function buildRepository() {
  const http = AxiosAdapter;

  return {
    dog: { ...DogRepositoryHttp(http), ...DogRepositoryMemory() },
  };
}

export const Repository = buildRepository();
