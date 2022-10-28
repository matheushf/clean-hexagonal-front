import { plainToInstance } from 'class-transformer';
import { HttpI } from '@clean-front/shared';
import { CatRepositoryI } from '../../domain/ports/CatRepository';
import { CatE } from '../../domain/entity';

export function CatRepositoryHttp(
  http: HttpI,
): CatRepositoryI {
  const commonConfig = {
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_zrycHb91rLeX2wTEovXkDqoQP2KcaBtfh5ZS7BJQXmZPDzpQl3fgxgTuFsJUWAO4',
    },
  };

  function getCats() {
    return http
      .get('/breeds?limit=20&page=0', commonConfig)
      .then((cats: CatE[]) => plainToInstance(CatE, cats));
  }

  return { getCats };
}
