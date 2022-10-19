import { HttpI } from '../domain/ports/http';

export function HomeService(http: HttpI) {
  function getDogs() {
    return http.get('https://dog.ceo/api/breeds/list/all');
  }

  return { getDogs };
}
