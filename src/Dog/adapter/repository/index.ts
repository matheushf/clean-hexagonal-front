import { AxiosAdapter } from '../axios';
import { DogRepositoryHttp } from './dogRepositoryHttp';

function buildRepository() {
  const http = AxiosAdapter;

  return {
    dog: DogRepositoryHttp(http),
  };
}

export const Repository = buildRepository();
