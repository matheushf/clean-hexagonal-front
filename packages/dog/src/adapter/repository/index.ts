import { AxiosAdapter } from '../axios';
import { DogRepositoryHttp } from './dogRepositoryHttp';
import { DogRepositoryMemory } from './dogRepositoryMemory';
import { DogRepositoryStorage } from './dogRepositoryStorage';

function buildRepository() {
  const http = AxiosAdapter;

  return {
    dog: { ...DogRepositoryHttp(http), ...DogRepositoryMemory(), ...DogRepositoryStorage() },
  };
}

export const Repository = buildRepository();
