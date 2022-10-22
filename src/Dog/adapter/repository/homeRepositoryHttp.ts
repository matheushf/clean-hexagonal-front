import { HomeRepositoryI } from '../../domain/ports/HomeRepository';
import { HttpI } from '../../../shared/domain/ports/http';

export function HomeRepositoryHttp(http: HttpI): HomeRepositoryI {
  const commonConfig = { baseURL: 'https://api.thedogapi.com/v1/' };

  function getDogs() {
    return http.get('/breeds?limit=10&page=0', commonConfig);
  }

  function saveFavouriteDogImage() {
    return http.post('/favourites', {}, commonConfig);
  }

  return { getDogs, saveFavouriteDogImage };
}
