import { AxiosAdapter } from '@clean-front/shared';
import { CatRepositoryHttp } from './catRepositoryHttp';

function buildRepository() {
  const http = AxiosAdapter;

  return {
    cat: { ...CatRepositoryHttp(http) },
  };
}

export const Repository = buildRepository();
