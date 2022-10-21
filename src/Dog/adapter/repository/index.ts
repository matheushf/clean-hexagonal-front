import { AxiosAdapter } from '../axios';
import { HomeRepositoryHttp } from './homeRepositoryHttp';

function Repository() {
  const http = AxiosAdapter;

  return {
    home: HomeRepositoryHttp(http),
  };
}

export const DogRepository = Repository();
