import { HomeRepositoryI } from '../../domain/ports/HomeRepository';
import { HttpI } from '../../domain/ports/http';

export function HomeRepositoryHttp(http: HttpI): HomeRepositoryI {
  function getDogs() {
    return http.get('https://dog.ceo/api/breeds/list/all');
  }

  return { getDogs };
}
